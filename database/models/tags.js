"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {
      Tags.hasMany(models.PublicationsTags, {
        as: "publication_tags",
        foreignKey: "publication_tag_id",
      });
      Tags.hasMany(models.UsersTags, {
        as: "user_tags",
        foreignKey: "user_tag_id",
      });
    }
  }
  Tags.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Tags",
      tableName: "tags",
      underscored: true,
      timestamps: true,
    }
  );
  return Tags;
};
