"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("restaurants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idAddress: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      idRestaurantCategory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "restaurantCategories", key: "id" },
      },
      idEvaluation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "evaluations", key: "id" },
      },
      idDish: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "dishes", key: "id" },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("restaurants");
  },
};
