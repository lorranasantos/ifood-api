"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          category: "Culinária Brasileira",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category: "Culinária Mediterrânea",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category: "Culinária Italiana",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category: "Culinária Japonesa",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null);
  },
};
