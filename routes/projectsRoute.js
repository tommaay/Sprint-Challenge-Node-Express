const express = require("express");
const route = express.Router();

// database
const projectsDb = require("../data/helpers/projectModel");

// middleware
const checkNameLength = require("../middleware/nameLength");

// routes
route.get("/", async (req, res) => {
  const projects = await projectsDb.get();

  try {
    res.json(projects);
  } catch (err) {
    res.json({ message: "Could not retrieve the list of projects." });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await projectsDb.get(id);

  try {
    !project
      ? res
          .status(404)
          .json({ message: "There is no project with that ID number." })
      : res.json(project);
  } catch (err) {
    res.json({ message: "Could not retrieve the project." });
  }
});

route.get("/:id/actions", async (req, res) => {
  const { id } = req.params;
  const project = await projectsDb.get(id);
  const projectActions = await projectsDb.getProjectActions(id);

  try {
    !project
      ? res
          .status(404)
          .json({ message: "There is no project with that ID number." })
      : res.json(projectActions);
  } catch (err) {
    res.json({ message: "Could not retrieve the project actions." });
  }
});

route.post("/add-project", checkNameLength, async (req, res) => {
  const newProject = req.body;
  await projectsDb.insert(newProject);

  try {
    res.status(201).json({ message: `Project has been created!` });
  } catch (err) {
    res.json({ message: "Could not create a new project." });
  }
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await projectsDb.get(id);
  await projectsDb.remove(id);

  try {
    !project
      ? res
          .status(404)
          .json({ message: "There is no project with that ID number." })
      : res.json(project);
  } catch (err) {
    res.json({ message: "Could not delete the project." });
  }
});

module.exports = route;
