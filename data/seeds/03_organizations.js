exports.seed = function(knex) {
  return knex('organizations')
    .then(function () {
      return knex('organizations').insert([
        {
          organization_id: 1, 
          org_name: "Help Animals", 
          org_description: "The root of our mission is to provide shelter for endangered animals around the world.", 
          campaign_id: 3 
        },
        {
          organization_id: 2, 
          org_name: "Habitat Builder", 
          org_description: "We find ways to build sustainable habitats for animal species in various parts of the globe.", 
          campaign_id: 1 
        },
        {
          organization_id: 3, 
          org_name: "Life Preserver", 
          org_description: "Our mission is to help restore balance in the ecosystem by providing aid to those that help keep it - animals.", 
          campaign_id: 2 
        },
      ]);
    });
};