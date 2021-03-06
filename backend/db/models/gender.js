'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define('Gender', {
    name: {
      type: DataTypes.ENUM(['Boy', 'Girl', 'Neutral'])
    }
  });
  Gender.associate = function (models) {
    Gender.hasMany(models.Item, { foreignKey: 'genderId' });
  };
  return Gender;
};