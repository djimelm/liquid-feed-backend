const { Sequelize } = require("sequelize");

// Create a new instance of Sequelize
const sequelize = new Sequelize("database_development", "postgres", "057193", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
