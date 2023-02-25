const express = require("express");
const { getAllCities } = require("../controllers/cities.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware, getAllCities);

module.exports = router;
