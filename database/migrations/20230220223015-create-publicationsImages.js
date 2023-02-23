"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "publicationsImages",
        {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
          },
          publication_id: {
            type: Sequelize.UUID,
            allowNull: false,
            foreignKey: true,
            references: {
              model: "publications",
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
          },
          image_url: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          order: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
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
  down: async (queryInterface /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable("publicationsImages", { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
