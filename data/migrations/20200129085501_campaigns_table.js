exports.up = async function(knex) {
  await knex.schema.createTable("campaigns", (table) => {
    table.increments()
    
    table.string("title")
      .unique()
      .notNullable()
    table.string("animal")
      .notNullable()
    table.string("urgency", 128)
      .notNullable()
    table.string("location")
      .notNullable()
    table.date("date")
      .notNullable()
    table.string("description", 255)
      .notNullable()
    table.float("funding_goal")
      .notNullable()
    
    table.integer("donation_id")
      .unsigned()
      .references("id")
      .inTable("supporters")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .unique()

    table.text("image")
    table.boolean("completed")
      .notNullable()
      .defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("campaigns")
};