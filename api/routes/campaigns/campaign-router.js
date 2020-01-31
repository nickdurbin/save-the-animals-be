const express = require("express")
const Campaigns = require("./campaign-model")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const campaigns = await Campaigns.find()
   console.log(campaigns)
    res.json(campaigns)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const campaign = await Campaigns.findById(id)
    return res.json(campaign)
  } catch (err) {
    next(err)
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