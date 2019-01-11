module.exports = (req, res, next) => {
  const action = req.body;
  const { description } = action;

  if (description.length <= 128) {
    req.body.description = description;
    next();
  } else {
    res
      .status(400)
      .json({ message: "Description name must be less than 128 characters." });
  }
};
