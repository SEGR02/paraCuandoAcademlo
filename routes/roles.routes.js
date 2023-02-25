const express = require("express");
const { getAllRoles } = require("../controllers/roles.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware, getAllRoles);

module.exports = router;
