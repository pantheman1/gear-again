'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define('Gender', {
    name: DataTypes.STRING
  }, {});
  Gender.associate = function (models) {
    Gender.hasMany(models.Item, { foreignKey: 'category_id' });
  };
  return Gender;
};