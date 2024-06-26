"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Events", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cattleID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cattleName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deviceLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lbs: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      wheelDistance: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deviceID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deviceName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feedName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deviceStatus: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Events");
  },
};
