const express = require("express")
const Supporters = require("./supporter-model")
const router = express.Router()

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

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("campaigns").insert(req.body)
    const newCampaign= await db("campaigns").where('id', id).first()
    return res.status(201).json(newCampaign)
  } catch (err) {
    next(err)
  }
})

router.post("/:id", async (req, res, next) => {
  try {
    const campaignId = req.params.id
    const [id] = await db("suporters").insert(req.body)
    const donation = await Campaigns.findById(campaignId)

    const newDonation= await db("supporters").where('id', id).first()
    return res.status(201).json(newDonation)
  } catch (err) {
    next(err)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const campaign = req.body
    
    await Campaigns.update(id, campaign)
    
    const newCampaign = await Campaigns.findById(id)

    return res.status(200).json(newCampaign)
  } catch(error) {
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