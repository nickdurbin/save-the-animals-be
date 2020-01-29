exports.up = async function(knex) {
  await knex.schema.createTable("supporters", (table) => {
    table.integer("supporter_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
      .unique()
      .notNullable()

    table.string("first_name", 128)
      .notNullable()
    table.string("last_name", 128)
      .notNullable()

    table.integer("campaigns_supported")
      .unsigned()
    table.foreign("campaigns_supported")
      .references("id")
      .inTable("campaigns")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .unique()
      .notNullable()

    table.primary('supporter_id');
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("organizations")
};