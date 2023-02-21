"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    static associate(models) {
      Cities.belongsTo(models.States, {
        as: "states",
        foreignKey: "state_id",
      });
      Cities.hasMany(models.Publications, {
        as: "publications",
        foreignKey: "city_id",
      });
    }
  }
  Cities.init(
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
      state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Cities",
      tableName: "cities",
      underscored: true,
      timestamps: true,
    }
  );
  return Cities;
};
