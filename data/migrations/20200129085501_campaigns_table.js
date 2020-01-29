exports.up = async function(knex) {
  await knex.schema.createTable("campaigns", (table) => {
    table.increments()
    
    table.string("title")
      .unique()
      .notNullable()
    table.string("urgency", 128)
      .notNullable()
    table.string("location")
      .notNullable()
    table.date("date")
      .notNullable()
    table.string("description", 255)
      .notNullable()

    table.integer("animal_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("animals")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    table.float("funding_goal")
      .notNullable()
    table.float("donations")
    table.text("images")
    table.boolean("completed")
      .notNullable()
      .defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("campaigns")
};