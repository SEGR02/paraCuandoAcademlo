const express = require("express");
const routesUsers = require("./users.routes");
const routesTags = require("./tags.routes");
const routesPublicationsTypes = require("./publications.types.router");
// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require("./auth.routes");

function routerModels(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/auth", routesAuth);
  router.use("/users", routesUsers);
  router.use("/tags", routesTags);
  router.use("/publicationsTypes", routesPublicationsTypes);
}

module.exports = routerModels;
