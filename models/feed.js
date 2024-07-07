const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Feed = sequelize.define(
  "Feed",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    feedName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dm: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    calibration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deviceID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Feeds",
    timestamps: true,
  }
);

module.exports = Feed;
