const express = require("express");
const { getAllStates } = require("../controllers/states.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware, getAllStates);

module.exports = router;
