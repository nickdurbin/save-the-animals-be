const bcrypt = require('bcryptjs')
const db = require('../../../data/db-config')

function find() {
  return db("organizations").select("id", "email", "username", "org_name", "org_description")
}

function findBy(filter) {
  return db("organizations").where(filter).select("id", "email", "username", "org_name")
}

function add(organization) {
  organization.password = bcrypt.hashSync(organization.password, 14)
  return db("organizations").insert(organization).returning(["id", "org_name", "email", "username"])
}

function findById(id) {
  return db("organizations").where({ id }).first("id", "username", "org_name", "org_description")
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