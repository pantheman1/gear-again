'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_detail = sequelize.define('Order_detail', {
    order_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER
  }, {});
  Order_detail.associate = function (models) {
    // associations can be defined here
  };
  return Order_detail;
};