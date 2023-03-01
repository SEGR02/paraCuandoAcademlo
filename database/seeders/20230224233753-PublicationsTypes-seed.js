"use strict";

const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface /*Sequelize*/) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        "publicationtypes",
        [
          {
            id: 1,
            name: "Marcas y tiendas",
            description: "Para empresas",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 2,
            name: "Artistas y conciertos",
            description: "Para musica",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 3,
            name: "Torneos",
            description: "Para deportes",
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface /*Sequelize*/) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete(
        "publicationtypes",
        {
          name: {
            [Op.or]: ["Marcas y tiendas", "Artistas y conciertos", "Torneos"],
          },
        },
        { transaction }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
