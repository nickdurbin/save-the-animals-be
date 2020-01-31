exports.seed = function(knex) {
  return knex('organizations')
    .then(function () {
      return knex('organizations').insert([
        {
          id: 1,
          email: "org1@org1.com",
          username: "org1",
          password: "password", 
          org_name: "Help Animals", 
          org_description: "The root of our mission is to provide shelter for endangered animals around the world.", 
          campaign_id: 3 
        },
        {
          id: 2,
          email: "org2@org2.com",
          username: "org2",
          password: "password",  
          org_name: "Habitat Builder", 
          org_description: "We find ways to build sustainable habitats for animal species in various parts of the globe.", 
          campaign_id: 1 
        },
        {
          id: 3,
          email: "org3@org3.com",
          username: "org3",
          password: "password",  
          org_name: "Life Preserver", 
          org_description: "Our mission is to help restore balance in the ecosystem by providing aid to those that help keep it - animals.", 
          campaign_id: 2 
        },
      ]);
    });
};