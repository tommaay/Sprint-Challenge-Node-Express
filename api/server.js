const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

// routes
const projectsRoute = require("../routes/projectsRoute");
const actionsRoute = require("../routes/actionsRoute");

// middleware global
server.use(express.json());
server.use(morgan("short"));
server.use(helmet());
server.use(cors());

// routing
server.use("/projects", projectsRoute);
server.use("/actions", actionsRoute);

module.exports = server;
