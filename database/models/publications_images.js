"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PublicationsImages extends Model {
    static associate(models) {
      PublicationsImages.belongsTo(models.Publications, {
        as: "publication",
        foreignKey: "publication_id",
      });
    }
  }
  PublicationsImages.init(
    {
      publication_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PublicationsImages",
      tableName: "publicationImages",
      underscored: true,
      timestamps: true,
    }
  );
  return PublicationsImages;
};
