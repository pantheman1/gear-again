'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Billings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      billStreet: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billApt: {
        type: Sequelize.STRING
      },
      billCity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billState: {
        type: Sequelize.STRING,
        allowNull: false
      },
      billZip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Billings');
  }
};