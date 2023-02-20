const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);

module.exports = router;
