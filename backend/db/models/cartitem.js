'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    itemId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER
  }, {});
  CartItem.associate = function (models) {
    CartItem.belongsTo(models.Cart, { foreignKey: 'cartId' });
    CartItem.belongsTo(models.Item, { foreignKey: 'itemId' });
  };
  return CartItem;
};