"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PublicationsTypes extends Model {
    static associate(models) {
      PublicationsTypes.hasMany(models.Publications, {
        as: "publication",
        foreignKey: "publication_type_id",
      });
    }
  }
  PublicationsTypes.init(
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
      modelName: "PublicationsTypes",
      tableName: "publicationTypes",
      underscored: true,
      timestamps: true,
    }
  );
  return PublicationsTypes;
};
