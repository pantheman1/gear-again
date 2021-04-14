'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.TEXT,
      },
      profileImageUrl: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Cannot be an email.');
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256]
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] }
        },
        loginUser: {
          attributes: {}
        }
      }
    }
  );
  User.associate = function (models) {
    const columnMapping = {
      through: "CartDetail",
      otherKey: "itemId",
      foreignKey: "userId",
    }
    User.hasMany(models.Order, { foreignKey: 'userId' })
    User.hasMany(models.Item, { foreignKey: 'userId' })
    User.belongsToMany(models.Item, columnMapping)
  };
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email, name, profileImageUrl, bio } = this; // context will be the User instance
    return { id, username, email, name, profileImageUrl, bio };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ profileImageUrl, name, username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      name,
      profileImageUrl,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  User.updateUser = async function ({ profileImageUrl, password, name, username, email, bio }) {
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    if (profileImageUrl) {
      user = await User.save({
        username,
        email,
        hashedPassword,
        name,
        bio,
        profileImageUrl,
      });
    } else {
      user = await User.save({
        username,
        email,
        hashedPassword,
        name,
        bio,
      })
    }
    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};
