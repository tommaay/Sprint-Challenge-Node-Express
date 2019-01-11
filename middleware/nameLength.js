module.exports = (req, res, next) => {
  const project = req.body;
  const { name } = project;

  if (name.length <= 128) {
    req.body.name = name;
    next();
  } else {
    res
      .status(400)
      .json({ message: "Project name must be less than 128 characters." });
  }
};
