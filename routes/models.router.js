const express = require("express");
const routesUsers = require("./users.routes");
const routesTags = require("./tags.routes");
const routerPublicationsTypes = require("./publications.types.router");

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require("./auth.routes");

function routerModels(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/auth", routesAuth);
  router.use("/users", routesUsers);
  router.use("/tags", routesTags);
  router.use("/publicationsTypes", routerPublicationsTypes);
}

module.exports = routerModels;
