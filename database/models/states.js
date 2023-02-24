"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    static associate(models) {
      States.belongsTo(models.Countries, {
        as: "country",
        foreignKey: "country_id",
      });
      States.hasMany(models.Cities, {
        as: "cities",
        foreignKey: "state_id",
      });
    }
  }
  States.init(
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
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "States",
      tableName: "states",
      underscored: true,
      timestamps: true,
    }
  );
  return States;
};
