const express = require("express");
const {
  getAllPublicationsTypes,
  getAllPublicationsId,
} = require("../controllers/publications.types.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, getAllPublicationsTypes);
router.get("/:id", authMiddleware, getAllPublicationsId);

module.exports = router;
