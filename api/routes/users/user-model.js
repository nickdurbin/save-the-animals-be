const bcrypt = require('bcryptjs')
const db = require('../../../data/db-config')

function find() {
  return db("users").select("id", "email", "username", "role")
}

function findBy(filter) {
  return db("users").where(filter).select("id", "email", "username", "role")
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14)
  const [id] = await db("users").insert(user)

  return findById(id)
}

function findById(id) {
  return db("users").where({ id }).first("id", "username")
}

async function update(id, changes) {
  await db("users")
    .where({ id })
    .update(changes)

  return findById(id)
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