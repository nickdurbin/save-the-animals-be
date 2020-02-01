module.exports = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res
      .status(400)
      .json({ error: "Both an email and password are required for login" });
  } else {
    next();
  }
};