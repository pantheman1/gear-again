'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { name: 'Camp' },
      { name: 'Bike' },
      { name: 'Run' },
      { name: 'Fitness' },
      { name: 'Climb' },
      { name: 'Snow' },
      { name: 'Sports' },
      { name: 'Fish' },
      { name: 'General' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
