exports.seed = async (knex) => {
  await knex("supporters").truncate()
  await knex("campaigns").truncate()
  await knex("organizations").truncate()
  await knex("users").truncate()
}