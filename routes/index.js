const express = require("express");
const router = express.Router();

const userRoutes = require("./users");
// You can add more routes here

router.use("/users", userRoutes);

module.exports = router;
