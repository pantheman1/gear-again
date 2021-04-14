'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartDetail = sequelize.define('CartDetail', {
    itemId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {});
  CartDetail.associate = function (models) {
    CartDetail.belongsTo(models.User, { foreignKey: "userId" });
    CartDetail.belongsTo(models.Item, { foreignKey: "itemId" });
  };
  return CartDetail;
};