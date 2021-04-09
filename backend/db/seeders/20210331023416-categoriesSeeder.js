'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { name: 'CAMP' },
      { name: 'BIKE' },
      { name: 'RUN' },
      { name: 'FITNESS' },
      { name: 'CLIMB' },
      { name: 'SNOW' },
      { name: 'SPORTS' },
      { name: 'FISH' },
      { name: 'GENERAL' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
