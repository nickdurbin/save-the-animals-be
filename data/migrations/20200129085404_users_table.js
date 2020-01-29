exports.up = async function(knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments()
    
    table.string("email")
      .unique()
      .notNullable()
    table.string("username", 128)
      .unique()
      .notNullable()
    table.string("password", 128)
      .notNullable()
    table.string("role")
      .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users")
};