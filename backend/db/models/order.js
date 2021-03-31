'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: DataTypes.INTEGER,
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 500],
      },
    },
    billing_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 500],
      },
    },
    order_complete: DataTypes.BOOLEAN
  }, {});
  Order.associate = function (models) {
    const columnMapping = {
      through: 'OrderDetail',
      otherKey: 'itemId',
      foreignKey: 'orderId',
    }
    Order.belongsToMany(models.OrderDetail, columnMapping);
    Order.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Order;
};