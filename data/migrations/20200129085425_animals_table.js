exports.up = async function(knex) {
  await knex.schema.createTable("animals", (table) => {
    table.increments()

    table.string("name", 128)
      .unique()
      .notNullable()
    table.string("species", 128)
      .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("animals")
};