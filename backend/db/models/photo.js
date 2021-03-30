'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    url: DataTypes.STRING,
    item_id: DataTypes.INTEGER
  }, {});
  Photo.associate = function (models) {
    // associations can be defined here
  };
  return Photo;
};