const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Parameter = sequelize.define(
  "Parameter",
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
    feedLimit: {
      type: DataTypes.INTEGER,
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    feedName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Parameter",
    timestamps: true,
  }
);

module.exports = Parameter;
