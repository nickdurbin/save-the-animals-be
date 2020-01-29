const db = require('../../../data/db-config')

function find() {
  return db("campaigns")
    .select(
      "id", 
      "title", 
      "urgency", 
      "date", 
      "description", 
      "animal_id", 
      "funding_goal",
      "donations",
      "image",
      "completed")
}

function findBy(filter) {
  return db("campaigns").where(filter).select("id", "title", "date", "urgency", "animal_id", "completed")
}

async function add(campaign) {
  const [id] = await db("campaigns").insert(campaign)

  return findById(id)
}

function findById(id) {
  return db("campaigns").where({ id }).first("id", "title")
}

async function update(id, changes) {
  await db("campaigns")
    .where({ id })
    .update(changes)

  return findById(id)
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