const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./config/database");
const cors = require("cors");
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import routes
const userRoutes = require("./routes/users");
const deviceRoutes = require("./routes/devices");
const cattleRoutes = require("./routes/cattles"); // Add this line
// Add more routes as needed

// Use routes
app.use("/users", userRoutes);
app.use("/devices", deviceRoutes);
app.use("/cattles", cattleRoutes);
// Add more route uses as needed

/*const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});*/

// Sync sequelize models
sequelize
  .sync()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
