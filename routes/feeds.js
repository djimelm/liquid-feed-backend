const express = require("express");
const router = express.Router();
const Event = require("../models/feed");

router.post("/add", async (req, res) => {
  try {
    const { feedName, dm, calibration, deviceID } = req.body;
    const newCattle = await Event.create({
      feedName,
      dm,
      calibration,
      deviceID,
    });
    res
      .status(201)
      .json({ message: "Feed added successfully", cattle: newCattle });
  } catch (error) {
    res.status(500).json({ message: "Error adding Feed", error });
  }
});

// get all record

router.get("/get", async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving events",
      error,
    });
  }
});
// Get specific columns
router.get("/getfeed", async (req, res) => {
  try {
    const events = await Event.findAll({
      attributes: ["id", "feedName", "dm", "calibration", "deviceID"], // specify the columns you want
    });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving feed",
      error,
    });
  }
});
module.exports = router;
