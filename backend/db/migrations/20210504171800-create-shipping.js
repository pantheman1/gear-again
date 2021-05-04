'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shippings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shipStreet: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shipApt: {
        type: Sequelize.STRING,
      },
      shipCity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shipState: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shipZip: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('Shippings');
  }
};