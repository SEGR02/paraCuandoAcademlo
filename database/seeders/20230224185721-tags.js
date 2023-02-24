"use strict";
const uuid = require("uuid");
const { Op } = require("sequelize");
const { hashPassword } = require("../../libs/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    const tagsSeeds = [
      {
        id: "1",
        name: "Ropa y accesorios",
        description: "reloj",
        image_url: "image_reloj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        name: "Deportes",
        description: "futbol",
        image_url: "image_futbol",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "3",
        name: "Conciertos",
        description: "Divididos",
        image_url: "image_Divididos",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "4",
        name: "Abastecimiento",
        description: "example",
        image_url: "image_Abastecimiento",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "5",
        name: "Meet & Greet",
        description: "example",
        image_url: "image_example",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "6",
        name: "E-sport",
        description: "Example",
        image_url: "image_E-sport",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "7",
        name: "Pop & Rock",
        description: "example",
        image_url: "image_Pop & Rock",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "8",
        name: "Tecnologia",
        description: "example",
        image_url: "image_Tecnologia",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "9",
        name: "hogar y decoracion",
        description: "example",
        image_url: "image_hogar y decoracion",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    try {
      await queryInterface.bulkInsert("tags", tagsSeeds, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete(
        "tags",
        {
          name: {
            [Op.or]: name,
          },
          description: {
            [Op.or]: description,
          },
          image_url: {
            [Op.or]: image_url,
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
