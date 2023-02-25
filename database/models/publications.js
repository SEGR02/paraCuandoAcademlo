"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    static associate(models) {
      Publications.belongsTo(models.Users, {
        as: "users",
        foreignKey: "user_id",
      });
      Publications.belongsTo(models.publicationtypes, {
        as: "publicationtypes",
        foreignKey: "publication_id",
      });
      Publications.belongsTo(models.Cities, {
        as: "cities",
        foreignKey: "city_id",
      });
      Publications.hasMany(models.PublicationsImages, {
        as: "publicationImages",
        foreignKey: "publication_id",
      });
      Publications.hasMany(models.Votes, {
        as: "votes",
        foreignKey: "publication_id",
      });
      Publications.hasMany(models.PublicationsTags, {
        as: "publicationsTags",
        foreignKey: "publication_id",
      });
    }
  }
  Publications.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      publication_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Publications",
      tableName: "publication",
      underscored: true,
      timestamps: true,
      scopes: {
        no_timestamps: {
          attributes: { exclude: ["created_at", "updated_at"] },
        },
      },
    }
  );
  return Publications;
};
