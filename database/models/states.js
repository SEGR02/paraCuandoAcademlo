"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class states extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      states.belongsTo(models.Countries, {
        as: "country",
        foreignKey: "country_id",
      });
      // define association here
    }
  }
  states.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "states",
    }
  );
  return states;
};
