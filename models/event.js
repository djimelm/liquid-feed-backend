const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define(
  "Event",
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
    deviceID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feedName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "Events",
    timestamps: true,
  }
);

module.exports = Event;
