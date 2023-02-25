"use strict";
const uuid = require("uuid");
const { Op } = require("sequelize");
const { hashPassword } = require("../../libs/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    const citiesSeeds = [
      {
        id: 1,
        name: "San Martin",
        state_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    try {
      await queryInterface.bulkInsert("cities", citiesSeeds, { transaction });

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
        "cities",
        {
          name: {
            [Op.or]: name,
          },
          state_id: {
            [Op.or]: state_id,
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
