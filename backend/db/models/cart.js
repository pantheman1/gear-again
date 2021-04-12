'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userId: DataTypes.INTEGER
  }, {});
  Cart.associate = function (models) {
    const columnMapping = {
      through: 'CartItem',
      otherKey: 'itemId',
      foreignKey: 'cartId',
    }

    Cart.belongsToMany(models.Item, columnMapping);
    Cart.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Cart;
};