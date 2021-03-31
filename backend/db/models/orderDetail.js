'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    orderId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  OrderDetail.associate = function (models) {
    OrderDetail.belongsTo(models.Order, { foreignKey: 'orderId' })
    OrderDetail.belongsTo(models.Item, { foreignKey: 'itemId' })
  };
  return OrderDetail;
};