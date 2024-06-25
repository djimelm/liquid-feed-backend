const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cattle = sequelize.define(
  "Cattle",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cattleID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cattleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deviceLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lbs: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    wheelDistance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "Cattles",
    timestamps: true,
  }
);

module.exports = Cattle;
