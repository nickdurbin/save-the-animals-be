const bcrypt = require('bcryptjs')
const db = require('../../../data/db-config')

function find() {
  return db("users").select("id", "email", "username", "role")
}

function findBy(filter) {
  return db("users").where(filter).select("id", "email", "username", "role")
}

function add(user) {
  user.password = bcrypt.hashSync(user.password, 14)
  return db("users").insert(user).returning("*")
}

function findById(id) {
  return db("users").where({ id }).first("id", "username")
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .returning("*")
}

function remove(id) {
  return db("users")
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