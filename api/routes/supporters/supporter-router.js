const express = require("express")
const Supporters = require("./supporter-model")
const router = express.Router()


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

module.exports = router;