'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      title: 'Kiraly Moving Straps',
      brand: 'Kiraly Products',
      size: 'A small bag',
      price: 12.00,
      cost: 6.50,
      description: 'We used to sell these straps on Amazon but the seller fees drove us out of business. We are now trying get rid of over 300 straps however we can. Contact about bulk purchases.',
      isSold: false,
      orderId: null,
      userId: 1,
      categoryId: 9,
      conditionId: 1,
      genderId: 3,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
