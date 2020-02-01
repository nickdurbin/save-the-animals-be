const express = require('express')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../../middleware/validation/generateToken')
const Users = require('../users/user-model')
const Organizations = require('../organizations/organization-model')
const router = express.Router()
const Auth = require('../auth/auth_model')

router.post("/register/supporter", async (req, res, next) => {
  try {
    const user = await Users.add(req.body)
    
    if (user) {
      return res.status(201).json({ message: "User has been successfully registered.", user})
    }

  } catch (error) { 
    next(error)
  }
})

router.post("/register/organization", async (req, res, next) => {
  try {
    const organization = await Organizations.add(req.body)
    
    if (organization) {
      return res.status(201).json({ message: "Organization has been successfully registered.", organization })
    } 
  } catch (error) {
    next(error)
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body
    const account = await Auth.isAccount(email)
   
    if (!account) {
      res.status(404).json({ message: "Sorry, but email or password is invalid." }) 
    }
    const passwordValid = await bcrypt.compare(password, account.password)
    if (!passwordValid) {
      res.status(404).json({ message: "Sorry, but email or password is invalid." }) 
    }
    const token = generateToken(account);
    res.status(200).json({ message: `Welcome, ${account.email}!`, token})
  } catch (error) {
    next(error)
  }
})

module.exports = router;