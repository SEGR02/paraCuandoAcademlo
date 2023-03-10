"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PublicationsTags extends Model {
    static associate(models) {
      PublicationsTags.belongsTo(models.Tags, {
        as: "tags",
        foreignKey: "tag_id",
      });
      PublicationsTags.belongsTo(models.Publications, {
        as: "publication",
        foreignKey: "tag_id",
      });
    }
  }
  PublicationsTags.init(
    {
      tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      publication_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PublicationsTags",
      tableName: "publicationsTags",
      underscored: true,
      timestamps: true,
    }
  );
  return PublicationsTags;
};
