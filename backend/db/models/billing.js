'use strict';
module.exports = (sequelize, DataTypes) => {
  const Billing = sequelize.define('Billing', {
    billStreet: DataTypes.STRING,
    billApt: DataTypes.STRING,
    billCity: DataTypes.STRING,
    billState: DataTypes.STRING,
    billZip: DataTypes.STRING
  }, {});
  Billing.associate = function (models) {
    Billing.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Billing;
};