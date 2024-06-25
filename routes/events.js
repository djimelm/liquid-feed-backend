const express = require("express");
const router = express.Router();
const Event = require("../models/event");

router.post("/add", async (req, res) => {
  try {
    const {
      cattleID,
      cattleName,
      deviceLocation,
      lbs,
      startTime,
      endTime,
      wheelDistance,
      date,
      deviceID,
      feedName,
    } = req.body;
    const newCattle = await Event.create({
      cattleID,
      cattleName,
      deviceLocation,
      lbs,
      startTime,
      endTime,
      wheelDistance,
      date,
      deviceID,
      feedName,
    });
    res
      .status(201)
      .json({ message: "Event added successfully", cattle: newCattle });
  } catch (error) {
    res.status(500).json({ message: "Error adding event", error });
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
router.get("/getevents", async (req, res) => {
  try {
    const events = await Event.findAll({
      attributes: [
        "id",
        "cattleID",
        "cattleName",
        "deviceLocation",
        "lbs",
        "startTime",
        "endTime",
        "wheelDistance",
        "date",
      ], // specify the columns you want
    });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving events",
      error,
    });
  }
});
module.exports = router;
