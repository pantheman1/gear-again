'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    title: DataTypes.STRING,
    brand: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    cost: DataTypes.DECIMAL(10, 2),
    description: DataTypes.TEXT,
    isSold: DataTypes.BOOLEAN,
    orderId: DataTypes.INTEGER,
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

    Item.belongsToMany(models.OrderDetail, columnMapping);
    Item.hasMany(models.Photo, { foreignKey: 'itemId' });
    Item.belongsTo(models.User, { foreignKey: 'userId' });
    Item.belongsTo(models.Category, { foreignKey: 'categoryId' });
    Item.belongsTo(models.Condition, { foreignKey: 'conditionId' });
    Item.belongsTo(models.Gender, { foreignKey: 'genderId' });
  };
  return Item;
};