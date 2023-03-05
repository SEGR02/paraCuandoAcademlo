const express = require("express");
const routesUsers = require("./users.routes");
const routesTags = require("./tags.routes");
const routesCountries = require("./countries.routes");
const routesStates = require("./states.routes");
const routesCities = require("./cities.routes");
const routesRoles = require("./roles.routes");
const routesPublicationsTypes = require("./publications.types.router");
// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require("./auth.routes");

function routerModels(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/auth", routesAuth);
  router.use("/users", routesUsers);
  router.use("/tags", routesTags);
  router.use("/countries", routesCountries);
  router.use("/states", routesStates);
  router.use("/cities", routesCities);
  router.use("/roles", routesRoles);
  router.use("/publications_types", routesPublicationsTypes);
}

module.exports = routerModels;
