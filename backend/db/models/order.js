'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: DataTypes.DECIMAL(10, 2),
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 500],
      },
    },
    billingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 500],
      },
    },
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