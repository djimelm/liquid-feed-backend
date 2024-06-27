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
const eventRoutes = require("./routes/events");
const downloadRoutes = require("./routes/download");
// Add more routes as needed

// Use routes
app.use("/users", userRoutes); //
app.use("/devices", deviceRoutes);
app.use("/cattles", cattleRoutes);
app.use("/events", eventRoutes); // route to get the recent event
app.use("/download", downloadRoutes); // route to download csv and wxcel file
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
