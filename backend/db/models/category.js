'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.ENUM([
        'Camp',
        'Bike',
        'Run',
        'Fitness',
        'Climb',
        'Snow',
        'Sports',
        'Fish',
        'General',
      ])
    }
  });
  Category.associate = function (models) {
    Category.hasMany(models.Item, { foreignKey: 'categoryId' });
  };
  return Category;
};