"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class publicationstypes extends Model {
    static associate(models) {
      publicationstypes.hasMany(models.Publications, {
        as: "publication",
        foreignKey: "publication_type_id",
      });
    }
  }
  publicationstypes.init(
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
      modelName: "publicationstypes",
      tableName: "publicationtypes",
      underscored: true,
      timestamps: true,
    }
  );
  return publicationstypes;
};
