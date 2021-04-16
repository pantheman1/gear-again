'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    title: DataTypes.STRING,
    brand: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    cost: DataTypes.DECIMAL(10, 2),
    weight: DataTypes.DECIMAL(10, 2),
    description: DataTypes.TEXT,
    isSold: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    conditionId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER
  }, {});
  Item.associate = function (models) {
    const columnMapping = {
      through: 'OrderDetail',
      otherKey: 'orderId',
      foreignKey: 'itemId',
    }

    const columnMappingCart = {
      through: 'CartDetail',
      otherKey: 'userId',
      foreignKey: 'itemId',
    }

    Item.belongsToMany(models.Order, columnMapping);
    Item.belongsToMany(models.User, columnMappingCart);
    Item.hasMany(models.Photo, { foreignKey: 'itemId' });
    Item.belongsTo(models.User, { foreignKey: 'userId' });
    Item.belongsTo(models.Category, { foreignKey: 'categoryId' });
    Item.belongsTo(models.Condition, { foreignKey: 'conditionId' });
    Item.belongsTo(models.Gender, { foreignKey: 'genderId' });
  };
  return Item;
};