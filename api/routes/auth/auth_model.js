const db = require('../../../data/db-config')

async function isAccount(email) {
  const user = await db("users").where({ email }).first()
  if (user) {
    return user 
  } 

  const organization = await db("organizations").where({ email }).first()
  if (organization) {
    return organization
  }

  return null;
}

module.exports = {
  isAccount
}