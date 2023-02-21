"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Votes extends Model {
    static associate(models) {
      Votes.belongsTo(models.Publications, {
        as: "publication",
        foreignKey: "publication_id",
      });
      Votes.belongsTo(models.Users, {
        as: "users",
        foreignKey: "user_id",
      });
    }
  }
  Votes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      publication_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      user_id: {
        typ: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Votes",
      tableName: "votes",
      underscored: true,
      timestamps: true,
    }
  );
  return Votes;
};
