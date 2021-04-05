'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderDetails', [
      {
        orderId: 1,
        itemId: 1,
      },
      {
        orderId: 1,
        itemId: 12,
      },
      {
        orderId: 1,
        itemId: 3,
      },
      {
        orderId: 2,
        itemId: 10,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderDetails', null, {});
  }
};
