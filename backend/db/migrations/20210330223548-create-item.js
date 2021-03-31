'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING(50)
      },
      size: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cost: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT
      },
      isSold: {
        type: Sequelize.BOOLEAN,
        defaultStatus: false,
        allowNull: false,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Orders" }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Categories" }
      },
      conditionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Conditions" }
      },
      genderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Genders" }
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
    return queryInterface.dropTable('Items');
  }
};