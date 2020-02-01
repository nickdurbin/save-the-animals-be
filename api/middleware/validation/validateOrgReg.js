module.exports = (req, res, next) => {
  if (!req.body.email || !req.body.username || !req.body.password || !req.body.org_name) {
    res.status(400).json({ 
      error:"Make sure to enter the following data:  email, username, password, first_name, and last_name."
      });
  } else {
    next();
  }
};