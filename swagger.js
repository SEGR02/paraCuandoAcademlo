const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [
    "./routes/auth.routes.js",
    "./database/models/users.js",
    "./routes/users.routes.js",
  ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API",
      version: "0.0.9",
      description: "API for ecommerce aplication",
    },
  },
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  //generar la ruta de donde se mostrara la documentacion
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader({ "Content-Type": "aplication/json" });
    res.send(swaggerSpec);
  });
};

module.exports = swaggerDocs;
