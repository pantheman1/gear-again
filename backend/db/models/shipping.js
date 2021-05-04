'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shipping = sequelize.define('Shipping', {
    shipStreet: DataTypes.STRING,
    shipApt: DataTypes.STRING,
    shipCity: DataTypes.STRING,
    shipState: DataTypes.STRING,
    shipZip: DataTypes.STRING
  }, {});
  Shipping.associate = function (models) {
    Shipping.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Shipping;
};