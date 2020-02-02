const db = require('../../../data/db-config')

async function find() {
  const campaigns = await db("campaigns").select("*")
  return campaigns.map((campaign) => {
    return { ...campaign, completed: campaign.completed === 1 ? true : false }
  })
}

function findBy(filter) {
  return db("campaigns").where(filter).select("id", "title", "animal", "location", "date", "funding_goal", "urgency", "completed")
}

function add(campaign) {
  return db("campaigns").insert(campaign).returning("*")
}


function addDono(donation) {
  return db("supporters").insert(donation).returning("*")
}

async function findById(id) {
  const campaign = await db("campaigns").where({ id }).first()
  const donation = await db("supporters").where("campaign_id", id).select().sum("donation")
  const supporter = await db("supporters").join("users", "supporter_id", "=", "users.id").where("campaign_id", id).select("first_name", "last_name", "email", "username", "donation", "message")
  const donations = donation.map((dono) => {
    return { ...dono, supporter_id: supporter }
  })
  return { ...campaign, completed: campaign.completed === 1 ? true : false, donations }
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
  addDono,
  find, 
  findBy, 
  findById,
  remove,
  update
}