'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Conditions', [
      { name: 'New' },
      { name: 'Good condition' },
      { name: 'Well used' },
      { name: 'Just need it gone' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Conditions', null, {});
  }
};
