const express = require('express')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../../middleware/validation/generateToken')
const validateLogin = require('../../middleware/validation/validateLogin')
const validateOrgReg = require('../../middleware/validation/validateOrgReg')
const validateSupReg = require('../../middleware/validation/validateSupReg')
const Users = require('../users/user-model')
const Organizations = require('../organizations/organization-model')
const router = express.Router()
const Auth = require('../auth/auth_model')
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/register/supporter", validateSupReg, async (req, res, next) => {
  try {
    const user = await Users.add(req.body) 
    const msg = {
      to: 'savetheanimalsbw@gmail.com',
      from: 'savetheanimalsbw@gmail.com',
      subject: 'Thank you for Registering an Account at Save the Animals',
      text: 'Thank you.',
      html: `Welcome ${user.first_name}, <br /> We are glad you chose to create an account with us!<br /><strong>Sincerly, Save the Animals!</strong>`,
    };
    
    if (user) {
      sgMail.send(msg);   
      return res.status(201).json({ message: "User has been successfully registered.", user})
    }

  } catch (error) { 
    next(error)
  }
})

router.post("/register/organization", validateOrgReg, async (req, res, next) => {
  try {
    const organization = await Organizations.add(req.body)
    const msg = {
      to: 'savetheanimalsbw@gmail.com',
      from: 'savetheanimalsbw@gmail.com',
      subject: 'Thank you for Registering an Account at Save the Animals',
      text: 'Thank you.',
      html: `Welcome ${organization.org_name}, <br /> We are glad you chose to create an account with us!<br /><strong>Sincerly, Save the Animals!</strong>`,
    };
    
    if (organization) {
      sgMail.send(msg);
      return res.status(201).json({ message: "Organization has been successfully registered.", organization })
    } 
  } catch (error) {
    next(error)
  }
})

router.post("/login", validateLogin, async (req, res, next) => {
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