'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: DataTypes.DECIMAL(10, 2),
    tax: DataTypes.DECIMAL(10, 2),
    shipping: DataTypes.DECIMAL(10, 2),
    orderComplete: DataTypes.BOOLEAN
  }, {});
  Order.associate = function (models) {
    const columnMapping = {
      through: 'OrderDetail',
      otherKey: 'itemId',
      foreignKey: 'orderId',
    }
    Order.belongsToMany(models.Item, columnMapping);
    Order.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Order;
};