const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  getAllUsers,
  getUserById,
  updateUser,
} = require("../controllers/users.controller");
const router = express.Router();

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: get all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/getAllUsersResponse'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation error
 * /api/v1/users/{id}:
 *   get:
 *     summary: get user by id
 *     parameters:
 *       - in: path
 *         name: id
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/getUserById'
 *       400:
 *         description: Something wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong / error
 * /api/v1/users/{userId}:
 *   put:
 *     summary: update user by id
 *     parameters:
 *       - in: path
 *         name: userId
 *     tags:
 *       - Users
 *     requestBody:
 *       description: Update user by id
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/updateUserBody'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/getUserById'
 *       400:
 *         description: Something wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong / error
 */

router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, updateUser);

module.exports = router;
