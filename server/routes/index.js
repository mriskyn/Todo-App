const express = require("express");
const route = express.Router();
const todoRouter = require("./todo");

route.use(todoRouter);

module.exports = route;
