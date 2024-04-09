"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("menus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "restaurants", key: "id" },
      },
      dish_id: {
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
    await queryInterface.dropTable("menus");
  },
};
