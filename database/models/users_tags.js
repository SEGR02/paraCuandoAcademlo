"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UsersTags extends Model {
    static associate(models) {
      UsersTags.belongsTo(models.Tags, {
        as: "tags",
        foreignKey: "tag_id",
      });
      UsersTags.belongsTo(models.Users, {
        as: "user",
        foreignKey: "user_id",
      });
    }
  }
  UsersTags.init(
    {
      tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UsersTags",
      tableName: "usersTags",
      underscored: true,
      timestamps: true,
    }
  );
  return UsersTags;
};
