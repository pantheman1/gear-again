'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    title: DataTypes.STRING,
    brand: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    isSold: DataTypes.BOOLEAN,
    order_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    condition_id: DataTypes.INTEGER,
    gender_id: DataTypes.INTEGER
  }, {});
  Item.associate = function (models) {
    Item.hasMany(models.Order_detail, { foreignKey: 'item_id' });
    Item.hasMany(models.Photo, { foreignKey: 'item_id' });
    Item.belongsTo(models.User, { foreignKey: 'user_id' });
    Item.belongsTo(models.Category, { foreignKey: 'category_id' });
    Item.belongsTo(models.Condition, { foreignKey: 'condition_id' });
    Item.belongsTo(models.Gender, { foreignKey: 'gender_id' });
  };
  return Item;
};