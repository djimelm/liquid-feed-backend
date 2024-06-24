const express = require("express");
const router = express.Router();
const Cattle = require("../models/cattle");

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
    } = req.body;
    const newCattle = await Cattle.create({
      cattleID,
      cattleName,
      deviceLocation,
      lbs,
      startTime,
      endTime,
      wheelDistance,
      date,
    });
    res
      .status(201)
      .json({ message: "Cattle added successfully", cattle: newCattle });
  } catch (error) {
    res.status(500).json({ message: "Error adding cattle", error });
  }
});

// get all record

router.get("/get", async (req, res) => {
  try {
    const cattles = await Cattle.findAll();
    res.status(200).json(cattles);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving cattles",
      error,
    });
  }
});
module.exports = router;
