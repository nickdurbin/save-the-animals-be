exports.up = async function(knex) {
  await knex.schema.createTable("supporters", (table) => {
    table.increments()

    table.integer("supporter_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .unique()
      .notNullable()

    table.float("donation", 2)
      .notNullable()
    table.string("message", 255)
      .notNullable()

    table.integer("campaign_id")
      .unsigned()
      .references("id")
      .inTable("campaigns")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .unique()
      .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("supporters")
};