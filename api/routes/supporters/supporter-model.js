const db = require('../../../data/db-config')

function find() {
  return db("supporters").select("id", "supporter_id", "donation", "message", "campaign_id")
}

function findBy(filter) {
  return db("supporters").where(filter).select("id", "donation", "message", "campaign_id", "supporter_id")
}

function add(donation) {
  return db("supporters").insert(donation).returning("*")
}

function findById(id) {
  return db("supporters").where({ id }).first("id", "supporter_id", "donation", "message", "campaign_id")
}

function remove(id) {
  return db("supporters")
    .where({ id })
    .del()
}

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
}