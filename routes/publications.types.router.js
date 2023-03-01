const express = require("express");
const {
  getAllPublicationsTypes,
} = require("../controllers/publications.types.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, getAllPublicationsTypes);

module.exports = router;
