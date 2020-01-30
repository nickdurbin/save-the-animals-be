exports.up = async function(knex) {
  await knex.schema.createTable("campaign_supporters", (table) => {
    table.increments()

    table.integer("donator_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
      .unique()
      .notNullable()

    table.float("dontation", 2)
      .notNullable()
    table.string("message", 255)
      .notNullable()
      .defaultTo("Thank you for your support of the project and helping Save the Animals make a real difference!")

    table.integer("campaigns_id")
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
  await knex.schema.dropTableIfExists("campaign_supporters")
};