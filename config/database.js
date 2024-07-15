const { Sequelize } = require("sequelize");

// Create a new instance of Sequelize
const sequelize = new Sequelize("database_development", "postgres", "057193", {
  host: "localhost",
  dialect: "postgres",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = sequelize;
