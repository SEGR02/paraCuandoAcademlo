const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  getAllTags,
  addTags,
  getTagById,
  editedTag,
  removeTag,
} = require("../controllers/tags.controller");

const router = express.Router();

router.get("/", authMiddleware, getAllTags);
router.post("/", authMiddleware, addTags);
router.get("/:id", authMiddleware, getTagById);
router.put("/:id", authMiddleware, editedTag);
router.delete("/:id", authMiddleware, removeTag);

module.exports = router;
