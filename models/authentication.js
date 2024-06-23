"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Authentication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Authentication.init(
    {
      device_id: DataTypes.INTEGER,
      auth_token: DataTypes.STRING,
      timestamp: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Authentication",
    }
  );
  return Authentication;
};
