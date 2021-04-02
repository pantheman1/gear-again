'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        itemId: 1,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product1/1.jpg'
      },
      {
        itemId: 1,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product1/2.jpg'
      },
      {
        itemId: 1,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product1/3.jpg'
      },
      {
        itemId: 1,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product1/4.jpg'
      },
      {
        itemId: 2,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product2/1.jpg'
      },
      {
        itemId: 2,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product2/2.jpg'
      },
      {
        itemId: 2,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product2/3.jpg'
      },
      {
        itemId: 2,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product2/4.jpg'
      },
      {
        itemId: 2,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product2/5.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
