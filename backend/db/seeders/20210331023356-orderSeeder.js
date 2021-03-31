'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        userId: 1,
        total: 90.01,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 1,
        total: 12.14,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 2,
        total: 34.34,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 2,
        total: 100,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 2,
        total: 60.90,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 2,
        total: 55.44,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 3,
        total: 50.50,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 3,
        total: 78.40,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 3,
        total: 40,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 3,
        total: 22.20,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 4,
        total: 24.25,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 4,
        total: 72.22,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 5,
        total: 12.46,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 5,
        total: 32.20,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 6,
        total: 125.20,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
      {
        userId: 6,
        total: 142.67,
        shippingAddress: faker.address.streetAddress(),
        billingAddress: faker.address.streetAddress(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
