"use strict";
const uuid = require("uuid");
const { Op } = require("sequelize");
const { hashPassword } = require("../../libs/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    const statesSeeds = [
      {
        id: 1,
        name: "Mendoza",
        country_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    try {
      await queryInterface.bulkInsert("states", statesSeeds, { transaction });

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
        "states",
        {
          name: {
            [Op.or]: name,
          },
          country_id: {
            [Op.or]: country_id,
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
