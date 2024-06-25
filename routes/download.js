const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const ExcelJS = require("exceljs");

// Endpoint to download CSV
router.get("/csv", async (req, res) => {
  try {
    const events = await Event.findAll();
    const csvWriter = createCsvWriter({
      path: "events.csv",
      header: [
        { id: "cattleID", title: "Cattle ID" },
        { id: "cattleName", title: "Cattle Name" },
        { id: "deviceLocation", title: "Device Location" },
        { id: "lbs", title: "lbs" },
        { id: "startTime", title: "Start Time" },
        { id: "endTime", title: "End Time" },
        { id: "wheelDistance", title: "Wheel Distance" },
        { id: "date", title: "Date" },
        { id: "deviceID", title: "Device ID" },
        { id: "feedName", title: "Feed Name" },
      ],
    });
    await csvWriter.writeRecords(events);
    res.download("events.csv");
  } catch (error) {
    res.status(500).json({ message: "Error generating CSV file", error });
  }
});

// Endpoint to download Excel
router.get("/excel", async (req, res) => {
  try {
    const events = await Event.findAll();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Events");

    worksheet.columns = [
      { header: "Cattle ID", key: "cattleID", width: 10 },
      { header: "Cattle Name", key: "cattleName", width: 20 },
      { header: "Device Location", key: "deviceLocation", width: 20 },
      { header: "lbs", key: "lbs", width: 10 },
      { header: "Start Time", key: "startTime", width: 20 },
      { header: "End Time", key: "endTime", width: 20 },
      { header: "Wheel Distance", key: "wheelDistance", width: 15 },
      { header: "Date", key: "date", width: 15 },
      { header: "device ID", key: "deviceID", width: 20 },
      { header: "Feed Name", key: "feedName", width: 20 },
    ];

    worksheet.addRows(events);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=events.xlsx");

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({ message: "Error generating Excel file", error });
  }
});

module.exports = router;
