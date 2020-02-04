const express = require("express")
const Campaigns = require("./campaign-model")
const Users = require("../users/user-model")
const Organizations = require('../organizations/organization-model')
const router = express.Router()
const { restricted } = require("../../middleware/validation/restricted")
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get("/", async (req, res, next) => {
  try {
    const campaigns = await Campaigns.find()
    res.json(campaigns)
  } catch (error) {
    next(error)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const campaign = await Campaigns.findById(id)
    return res.json(campaign)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.post("/", restricted, async (req, res, next) => {
  try {
    const organizations = await Organizations.find()
    const { subject, isOrg } = req.token
    console.log(isOrg)
    const organization = organizations.filter(org => {
      org.id === subject
    })
    const [id] = await Campaigns.add({...req.body, org_id: subject })
    const newCampaign= await Campaigns.findById("id", id)

    if (isOrg === 0) {
      res.status(401).json({ message: "You are not authorized to create this action. If you are an organization, please create an organization account. Thank you!"})
    } 

    if (organization) {
      res.status(201).json(newCampaign)
    } else {
      res.status(403).json({ message: "This action is forbidden. If you would like to create a campaign, please create an organization account."})
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.post("/:id", restricted, async (req, res, next) => {
  try {
    const users = await Users.find()
    const { subject } = req.token
    const supporter = users.filter(user => {
      user.id === subject
    })

    const campaignId = req.params.id
    const [id] = await Campaigns.addDono({ ...req.body, supporter_id: subject,  campaign_id: campaignId})
    const newDonation = await Campaigns.findDonoById("id", id)

    const msg = {
      to: 'savetheanimalsbw@gmail.com',
      from: 'savetheanimalsbw@gmail.com',
      subject: 'Thank you for your support!',
      text: 'Thank you.',
      html: `Thank you Donator, <br /> We are glad you have chosen to support a cause!<br /><strong>Sincerly, Save the Animals!</strong>`,
    };

    if (supporter) {
      sgMail.send(msg);   
      return res.status(201).json({ message: "Thank you for your donation!", newDonation})
    } else {
      res.status(401).json({ message: "Unauthorized action. Please login and try your request again."})
    }

  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const campaign = req.body
    
    await Campaigns.update(id, campaign)
    
    const newCampaign = await Campaigns.findById(id)
    console.log(newCampaign)
    return res.status(200).json(newCampaign)
  } catch(error) {
    console.log(error)
    next(error)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    await Campaigns.remove(req.params.id)
    return res.status(200).json({ message: "Campaign successfully deleted!" })
  } catch(error) {
    next(error)
  }
})

module.exports = router;