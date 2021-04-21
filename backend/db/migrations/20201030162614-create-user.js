'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      profileImageUrl: {
        type: Sequelize.STRING(2000),
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      bio: {
        type: Sequelize.TEXT,
      },
      shipStreetAddress: {
        type: Sequelize.STRING(500),
      },
      shipCityAddress: {
        type: Sequelize.STRING(500),
      },
      shipStateAddress: {
        type: Sequelize.STRING(30),
      },
      shipZip: {
        type: Sequelize.INTEGER,
      },
      billStreetAddress: {
        type: Sequelize.STRING(500),
      },
      billCityAddress: {
        type: Sequelize.STRING(500),
      },
      billStateAddress: {
        type: Sequelize.STRING(30),
      },
      billZip: {
        type: Sequelize.INTEGER,
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
