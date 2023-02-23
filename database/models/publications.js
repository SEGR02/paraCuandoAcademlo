"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    static associate(models) {
      // Publications.belongsTo(models.Users, {
      //   as: "users",
      //   foreignKey: "user_id",
      // });
      // Publications.belongsTo(models.PublicationsTypes, {
      //   as: "publications_types",
      //   foreignKey: "publication_type_id",
      // });
      // Publications.belongsTo(models.Cities, {
      //   as: "cities",
      //   foreignKey: "city_id",
      // });
      // Publications.hasMany(models.PublicationImages, {
      //   as: "publication_images",
      //   foreignKey: "publication_images_id",
      // });
      // Publications.belongdToMany(models.Users, {
      //   as: "users",
      //   foreignKey: "users_id",
      // }); /*(A través de votes)*/
      // Publications.belongdToMany(models.Tags, {
      //   as: "tags",
      //   foreignKey: "tag_id",
      // }); /*(A través de publications_tags)*/
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
    }
  );
  return Publications;
};
