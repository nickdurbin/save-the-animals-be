const bcrypt = require('bcryptjs')
const db = require('../../../data/db-config')

function find() {
  return db("organizations").select("id", "email", "username", "org_name", "org_description")
}

function findBy(filter) {
  return db("organizations").where(filter).select("id", "email", "username", "org_name")
}

async function add(organization) {
  organization.password = await bcrypt.hash(organization.password, 14)
  return db("organizations").insert(organization).returning(["id", "org_name", "email", "username"])
}

async function findById(id) {
  const organization = await db("organizations").where({ id }).first("id", "username", "org_name", "org_description")
  const campaigns = await db("organizations").join("campaigns", "organizations.id", "=", "campaigns.org_id").where("organizations.id", id).select("title", "animal", "location", "date", "description", "funding_goal", "image", "completed")
  const campaignList = campaigns.map(campaign => {
    return {...campaign, completed: campaign.completed === 1 ? true : false }
  })
  return { ...organization, campaignList }
}

function update(id, changes) {
  return db("organizations")
    .where({ id })
    .update(changes)
    .returning("*")
}

function remove(id) {
  return db("organizations")
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