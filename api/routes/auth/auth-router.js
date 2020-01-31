const express = require('express')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../../middleware/validation/generateToken')
const Users = require('../users/user-model')
const Organizations = require('../organizations/organization-model')
const router = express.Router()

router.post("/register", async (req, res, next) => {
  try {
    const organization = await Organizations.add(req.body)
    const user = await Users.add(req.body)
    
    if (organization) {
      return res.status(201).json({ message: "Organization has been successfully registered.", organization })
    } else if (user) {
      return res.status(201).json({ message: "User has been successfully registered.", user})
    }

  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await Users.findBy({ username }).first()
    const organization = await Organizations.findBy({ username }).first()
    const passwordValid = await bcrypt.compare(password, user.password || organization.password)

    if (user && passwordValid) {
      const token = generateToken(user);
      res.status(200).json({ 
        message: `Welcome, ${user.username}!`, token})
    } else if (organization && passwordValid) {
      const token = generateToken(organization);
      res.status(200).json({ 
        message: `Welcome, ${organization.username}!`, token})
    } else {
      res.status(401).json({ message: "Please try to login again!"})
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router;