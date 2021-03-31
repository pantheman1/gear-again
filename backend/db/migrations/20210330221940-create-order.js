'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shippingAddress: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      billingAddress: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      orderComplete: {
        type: Sequelize.BOOLEAN,
        defaultStatus: false
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
    return queryInterface.dropTable('Orders');
  }
};