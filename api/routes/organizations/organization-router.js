const express = require("express")
const Organizations = require("./organization-model")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const organizations = await Organizations.find()
   
    res.json(organizations)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const organization = await Organizations.findById(id)
    return res.json(organization)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("organizations").insert(req.body)
    const newOrg = await db("organizations").where('id', id).first()
    return res.status(201).json(newOrg)
  } catch (err) {
    next(err)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const organization = { username: req.body.username }
    const updatedOrg = await Organizations.update(id, organization)
    const newOrg = await Organizations.findById(id)
    return res.status(200).json(newOrg)
  } catch(error) {
    next(error)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    await Organizations.remove(req.params.id)
    return res.status(200).json({ message: "Organization successfully deleted!" })
  } catch(error) {
    next(error)
  }
})

module.exports = router;