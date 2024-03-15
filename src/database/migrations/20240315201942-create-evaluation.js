"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("evaluations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      grade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
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
    await queryInterface.dropTable("evaluations");
  },
};
