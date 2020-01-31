exports.up = async function(knex) {
  await knex.schema.createTable("organizations", (table) => {
    table.increments()
    
    table.string("email")
      .unique()
      .notNullable()
    table.string("username", 128)
      .unique()
      .notNullable()
    table.string("password", 128)
      .notNullable()

    table.string("org_name", 128)
      .notNullable()
      .unique()
    table.string("org_description", 255)
    table.boolean("isOrg")
      .notNullable()
      .defaultTo(true)

    table.integer("campaign_id")
      .unsigned()
      .references("id")
      .inTable("campaigns")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .unique()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("organizations")
};