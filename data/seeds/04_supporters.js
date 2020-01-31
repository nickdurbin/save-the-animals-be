exports.seed = function(knex) {
  return knex('supporters')
    .then(function () {
      return knex('supporters').insert([
        {
          id: 1,
          supporter_id: 1, 
          donation: 100.00, 
          message: "Thank you for your support of the project and helping, Save the Animals, make a real difference!", 
          campaign_id: 3 
        },
        {
          id: 2,
          supporter_id: 2, 
          donation: 1200.55, 
          message: "Thank you for your support of the project and helping, Save the Animals, make a real difference!", 
          campaign_id: 1 
        },
        {
          id: 3,
          supporter_id: 3, 
          donation: 800.00, 
          message: "Thank you for your support of the project and helping, Save the Animals, make a real difference!", 
          campaign_id: 2 
        },
        {
          id: 4,
          supporter_id: 3, 
          donation: 1900.00, 
          message: "Thank you for your support of the project and helping, Save the Animals, make a real difference!", 
          campaign_id: 3
        },
      ]);
    });
};