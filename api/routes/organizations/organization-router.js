const express = require("express")
const Organizations = require("./organization-model")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const organizations = await Organizations.find()
   
    res.json(organizations)
  } catch (error) {
    next(error)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const organization = await Organizations.findById(id)
    return res.json(organization)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const [id] = await Organizations.add(req.body)
    const newOrg = await Organizations.findById('id', id)
    return res.status(201).json(newOrg)
  } catch (error) {
    next(error)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const campaign = req.body
    
    await Organizations.update(id, campaign)
    
    const updatedOrg = await Organizations.findById(id)
    return res.status(200).json(updatedOrg)
  } catch(error) {
    next(error)
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Organizations.remove(req.params.id)
    return res.status(200).json({ message: "Organization successfully deleted!" })
  } catch(error) {
    next(error)
  }
})

module.exports = router;