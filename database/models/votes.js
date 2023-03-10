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
      publication_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
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
