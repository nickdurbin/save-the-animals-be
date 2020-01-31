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
      "image",
      "completed")
}

function findBy(filter) {
  return db("campaigns").where(filter).select("id", "title", "date", "urgency", "completed")
}

function add(campaign) {
  return db("campaigns").insert(campaign).returning("*")
}

function findById(id) {
  return db("campaigns").where({ id }).first("id", "title")
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