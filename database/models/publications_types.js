"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publicationstypes extends Model {
    static associate(models) {
      Publicationstypes.hasMany(models.Publications, {
        as: "publication",
        foreignKey: "publication_type_id",
      });
    }
  }
  Publicationstypes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "publicationtypes",
      tableName: "publicationtypes",
      underscored: true,
      timestamps: true,
      scopes: {
        view_public: {
          attributes: ["id", "name", "description"],
        },
      },
    }
  );
  return Publicationstypes;
};
