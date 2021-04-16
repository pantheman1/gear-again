'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        userId: 1,
        total: 90.01,
        tax: 6.40,
        shipping: 5.00,
        orderComplete: true,
      },
      // {
      //   userId: 1,
      //   total: 12.14,
      // },
      // {
      //   userId: 2,
      //   total: 34.34,
      // },
      // {
      //   userId: 2,
      //   total: 100,
      // },
      // {
      //   userId: 2,
      //   total: 60.90,
      // },
      // {
      //   userId: 2,
      //   total: 55.44,
      // },
      // {
      //   userId: 3,
      //   total: 50.50,
      // },
      // {
      //   userId: 3,
      //   total: 78.40,
      // },
      // {
      //   userId: 3,
      //   total: 40,
      // },
      // {
      //   userId: 3,
      //   total: 22.20,
      // },
      // {
      //   userId: 4,
      //   total: 24.25,
      // },
      // {
      //   userId: 4,
      //   total: 72.22,
      // },
      // {
      //   userId: 5,
      //   total: 12.46,
      // },
      // {
      //   userId: 5,
      //   total: 32.20,
      // },
      // {
      //   userId: 6,
      //   total: 125.20,
      // },
      // {
      //   userId: 6,
      //   total: 142.67,
      // },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
