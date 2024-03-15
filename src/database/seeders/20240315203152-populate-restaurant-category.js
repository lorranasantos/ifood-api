"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "restaurantCategories",
      [
        {
          category: "Comida italiana",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category: "Comida Japonesa",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category: "Comida Brasileira",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category: "Sorveteria",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", null, {});
  },
};
