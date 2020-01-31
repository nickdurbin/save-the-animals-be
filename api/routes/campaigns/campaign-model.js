const db = require('../../../data/db-config')

async function find() {
  const campaigns = await db("campaigns").select("*")
  return campaigns.map((campaign) => {
    return { ...campaign, completed: campaign.completed === 1 ? true : false }
  })
}

function findBy(filter) {
  return db("campaigns").where(filter).select("id", "title", "animal", "date", "urgency", "completed")
}

function add(campaign) {
  return db("campaigns").insert(campaign).returning("*")
}

async function findById(id) {
  const campaign = await db("campaigns").where({ id }).first()
  const donations = await db("supporters").where("campaign_id", id).select("donation", "message", "supporter_id")
  const supporter = await db("supporters").join("users", "supporter_id", "=", "users.id").where("supporter_id", id).select("first_name", "last_name", "email", "username")
  const donation = donations.map((dono) => {
    return { ...dono, supporter_id: supporter }
  })
  return { ...campaign, completed: campaign.completed === 1 ? true : false, donation }
}

function update(id, changes) {
  return db("campaigns")
    .where({ id })
    .update(changes)
    .returning("*")
}

function remove(id) {
  return db("campaigns")
    .where({ id })
    .del()
}

module.exports = {
  add, 
  find, 
  findBy, 
  findById,
  remove,
  update
}