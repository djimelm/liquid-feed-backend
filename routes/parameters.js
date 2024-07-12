const express = require("express");
const router = express.Router();
const Parameter = require("../models/parameter");

router.post("/add", async (req, res) => {
  try {
    const {
      cattleID,
      cattleName,
      feedLimit,
      startTime,
      endTime,
      date,
      feedName,
    } = req.body;
    const newParameter = await Parameter.create({
      cattleID,
      cattleName,
      feedLimit,
      startTime,
      endTime,
      date,
      feedName,
    });
    res.status(201).json({
      message: "Parameter added successfully",
      parameter: newParameter,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding parameter", error });
  }
});

// get all record

router.get("/get", async (req, res) => {
  try {
    const paramters = await Parameter.findAll();
    res.status(200).json(paramters);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving paramters",
      error,
    });
  }
});
// Get specific columns
router.get("/getparamters", async (req, res) => {
  try {
    const paramters = await Parameter.findAll({
      attributes: [
        "id",
        "cattleID",
        "cattleName",
        "feedLimit",
        "startTime",
        "endTime",
        "feedName",
      ], // specify the columns you want
    });
    res.status(200).json(paramters);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving paramters",
      error,
    });
  }
});
module.exports = router;
