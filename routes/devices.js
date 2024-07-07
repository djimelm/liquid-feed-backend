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
// route to get device state
router.get("/getdevicesstate", async (req, res) => {
  try {
    const [results] = await sequelize.query(`
      WITH LatestEvents AS (
        SELECT
          "deviceID",
          "deviceStatus",
          ROW_NUMBER() OVER (PARTITION BY "deviceID" ORDER BY "date" DESC) as row_num
        FROM "Events"
      )
      SELECT
        "deviceStatus",
        COUNT(DISTINCT "deviceID") as count
      FROM LatestEvents
      WHERE row_num = 1
      GROUP BY "deviceStatus"
    `);

    let on = 0;
    let off = 0;

    results.forEach((row) => {
      if (row.deviceStatus === 1) {
        on = row.count;
      } else if (row.deviceStatus === 0) {
        off = row.count;
      }
    });

    res.status(200).json({ on, off });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving device information",
      error,
    });
  }
});

module.exports = router;
