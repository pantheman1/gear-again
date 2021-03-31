'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    url: DataTypes.STRING,
    itemId: DataTypes.INTEGER
  }, {});
  Photo.associate = function (models) {
    Photo.belongsTo(models.Item, { foreignKey: 'itemId' })
  };
  return Photo;
};