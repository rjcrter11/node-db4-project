const express = require("express");
const helmet = require("helmet");
const recipeRouter = require("../routers/recipeRouter");
const ingredientsRouter = require("../routers/ingredientsRouter");

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("DB4 Project");
});

server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredientsRouter);

module.exports = server;
