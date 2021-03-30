'use strict';
module.exports = (sequelize, DataTypes) => {
  const Condition = sequelize.define('Condition', {
    name: DataTypes.STRING
  }, {});
  Condition.associate = function (models) {
    Condition.hasMany(models.Item, { foreignKey: 'category_id' });
  };
  return Condition;
};