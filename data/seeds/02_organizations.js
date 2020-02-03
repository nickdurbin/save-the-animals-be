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
          isOrg: true
        },
        {
          id: 2,
          email: "org2@org2.com",
          username: "org2",
          password: "password",  
          org_name: "Habitat Builder", 
          org_description: "We find ways to build sustainable habitats for animal species in various parts of the globe.",
          isOrg: true
        },
        {
          id: 3,
          email: "org3@org3.com",
          username: "org3",
          password: "password",  
          org_name: "Life Preserver", 
          org_description: "Our mission is to help restore balance in the ecosystem by providing aid to those that help keep it - animals.",
          isOrg: true
        },
        {
          id: 4,
          email: "org4@org4.com",
          username: "org4",
          password: "password", 
          org_name: "Australian Wildlife", 
          org_description: "We are a wildlife organization based in Australia.",
          isOrg: true
        },
        {
          id: 5,
          email: "org5@org5.com",
          username: "org5",
          password: "password",  
          org_name: "Sea Life Matters", 
          org_description: "Sea Life Matters intends to help preserve are restore habitat with-in our greatest resource - the ocean",
          isOrg: true
        },
        {
          id: 6,
          email: "org6@org6.com",
          username: "org6",
          password: "password",  
          org_name: "Animal Balance", 
          org_description: "A balanced ecosystem is great for everyone - humans, plants, and ANIMALS!",
          isOrg: true
        },
      ]);
    });
};