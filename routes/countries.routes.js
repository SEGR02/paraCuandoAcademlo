const express = require("express");
const { getAllCountries } = require("../controllers/countries.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();



router.get('/', authMiddleware, getAllCountries)


module.exports = router