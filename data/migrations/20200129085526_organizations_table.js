exports.up = async function(knex) {
  await knex.schema.createTable("organizations", (table) => {
    table.integer("organization_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
      .unique()
      .notNullable()

    table.string("org_name", 128)
      .notNullable()
      .unique()
    table.string("org_description", 255)

    table.integer("campaign_id")
      .unsigned()
      .references("id")
      .inTable("campaigns")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .unique()
      .notNullable()

    table.primary(['organization_id', 'campaign_id']);
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("organizations")
};