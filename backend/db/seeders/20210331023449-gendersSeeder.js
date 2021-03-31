'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genders', [
      { name: 'Boy' },
      { name: 'Girl' },
      { name: 'Neutral' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genders', null, {});
  }
};
