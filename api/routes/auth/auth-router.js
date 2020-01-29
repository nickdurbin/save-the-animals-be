const express = require('express')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../../middleware/validation/generateToken')
const Users = require('../users/user-model')
const router = express.Router()

router.post("/register", async (req, res, next) => {
  try {
    const user = await Users.add(req.body)

    res.status(201).json({ message: "User has been successfully registered.", user})
  } catch (error) {
    next(error)
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await Users.findBy({ username }).first()
    const passwordValid = await bcrypt.compare(password, user.password)

    if (user && passwordValid) {
      const token = generateToken(user);
      res.status(200).json({ 
        message: `Welcome, ${user.username}!`, token})
    } else {
      res.status(401).json({ message: "Please try to login again!"})
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router;