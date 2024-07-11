const express = require("express");
const router = express.Router();
const Feed = require("../models/feed");

router.post("/add", async (req, res) => {
  try {
    const { feedName, dm, calibration, deviceID } = req.body;
    const newFeed = await Feed.create({
      feedName,
      dm,
      calibration,
      deviceID,
    });
    res.status(201).json({ message: "Feed added successfully", feed: newFeed });
  } catch (error) {
    res.status(500).json({ message: "Error adding Feed", error });
  }
});
// get all record

router.get("/get", async (req, res) => {
  try {
    const feeds = await Feed.findAll();
    res.status(200).json(feeds);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving feeds",
      error,
    });
  }
});
// Get specific columns
/*router.get("/getfeed", async (req, res) => {
  try {
    const feeds = await Feed.findAll({
      attributes: ["id", "feedName", "dm", "calibration", "deviceID"], // specify the columns you want
    });
    res.status(200).json(feeds);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving feed",
      error,
    });
  }
});*/

// Get the last feed added
router.get("/getfeed", async (req, res) => {
  try {
    const feed = await Feed.findOne({
      attributes: ["id", "feedName", "dm", "calibration", "deviceID"],
      order: [["createdAt", "DESC"]], // Order by createdAt field in descending order
      limit: 1, // Ensure only one record is returned
    });
    res.status(200).json(feed);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving feed", error });
  }
});
module.exports = router;
