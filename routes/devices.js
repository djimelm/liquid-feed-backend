const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const { sequelize, Sequelize } = require("../models/event");
// Route to get device information and status from events table
router.get("/getdevices", async (req, res) => {
  try {
    const [devices] = await sequelize.query(`
      SELECT DISTINCT "deviceID", "deviceName", "deviceLocation", "deviceStatus", "date"
      FROM "Events"
      ORDER BY "deviceID"
    `);
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving device information",
      error,
    });
  }
});

module.exports = router;
