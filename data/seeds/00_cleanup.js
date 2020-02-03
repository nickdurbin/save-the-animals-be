exports.seed = async (knex) => {
  await knex("supporters").del()
  await knex("campaigns").del()
  await knex("organizations").del()
  await knex("users").del()
}