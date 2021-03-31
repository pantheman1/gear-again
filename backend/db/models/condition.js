'use strict';
module.exports = (sequelize, DataTypes) => {
  const Condition = sequelize.define('Condition', {
    name: {
      type: DataTypes.ENUM([
        'New',
        'Good condition',
        'Well used',
        'Just need it gone',
      ])
    }
  });
  Condition.associate = function (models) {
    Condition.hasMany(models.Item, { foreignKey: 'conditionId' });
  };
  return Condition;
};