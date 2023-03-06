const express = require("express");
const router = express.Router();

const passport = require("../libs/passport");

const verifySchema = require("../schemas/joiSchema.checker");
const {
  signupSchema,
  forgetPasswordSchema,
  restorePasswordSchema,
} = require("../schemas/auth.schemas");

const {
  signUp,
  logIn,
  forgetPassword,
  restorePassword,
  userToken,
} = require("../controllers/auth.controller");

/**
 * @openapi
 * /api/v1/auth/sign-up:
 *   post:
 *     summary: create a new user into aplication
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sign-up'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/sign-upResponse"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/sign-upBadResponse"
 * /api/v1/auth/login:
 *   post:
 *     summary: login user into aplication
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to login a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: logged
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/loginResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Wrong credentials
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not found user
 * /api/v1/auth/me:
 *   get:
 *     summary: Get profile
 *     security:
 *       - BearerAuth: [admin]
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/authMeResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 * /api/v1/auth/forget-password:
 *   post:
 *     summary: restore password
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to restore password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/restorePassword'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/restorePasswordResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Bad request
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not found user
 * /api/v1/auth/change-password/{token}:
 *   post:
 *     summary: Restore forget password
 *     parameters:
 *       - in: path
 *         name: token
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Restore forget password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/restorePasswordBody'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/restorePasswordFinishResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Bad request
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not found user
 */

router.post("/login", logIn);

router.post("/sign-up", verifySchema(signupSchema, "body"), signUp);

router.post(
  "/forget-password",
  verifySchema(forgetPasswordSchema, "body"),
  forgetPassword
);

router.post(
  "/change-password/:token",
  verifySchema(restorePasswordSchema, "body"),
  restorePassword
);

router.get("/me", passport.authenticate("jwt", { session: false }), userToken);

router.get(
  "/testing",
  passport.authenticate("jwt", { session: false }),
  async (request, response, next) => {
    try {
      return response.status(200).json({
        results: {
          user: request.user,
          isAuthenticated: request.isAuthenticated(),
          isUnauthenticated: request.isUnauthenticated(),
          _sessionManager: request._sessionManager,
          authInfo: request.authInfo,
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

module.exports = router;
