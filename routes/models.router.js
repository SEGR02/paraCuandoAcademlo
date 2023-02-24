const express = require("express");
const routesUsers = require("./users.routes");
const routesTags = require("./tags.routes");

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require("./auth.routes");
const authMiddleware = require("../middlewares/auth.middleware");

function routerModels(app) {
  const router = express.Router();

  app.use("/api/v1", authMiddleware, router);
  router.use("/auth", authMiddleware, routesAuth);
  router.use("/users", authMiddleware, routesUsers);
  router.use("/tags", routesTags);
}

module.exports = routerModels;
