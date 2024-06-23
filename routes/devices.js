const express = require("express");
const router = express.Router();

const devices = [{ deviceId: "device1", status: "active" }];

router.get("/", (req, res) => {
  res.json(devices);
});

router.post("/", (req, res) => {
  const { deviceId, status } = req.body;
  devices.push({ deviceId, status });
  res.status(201).json({ message: "Device added" });
});

module.exports = router;
