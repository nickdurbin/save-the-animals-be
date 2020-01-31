exports.seed = function(knex) {
  return knex('campaigns')
    .then(function () {
      return knex('campaigns').insert([
        {
          id: 1, 
          title: "Save the Pandas",
          animal: "Panda",
          urgency: 'Medium', 
          location: "Bangkok, Thailand", 
          date: "February 14, 2020",
          description: "We are raising money to help create a safe haven for pandas in Uganda. The money helps build a shelter, food, and water.",
          funding_goal: 8000.00,
          donation_id: 2,
          image: "https://unsplash.com/photos/6DSID8Ey9-U",
          completed: false
        },
        {
          id: 2, 
          title: "Help Save the Most Endangered Animal",
          animal: "Amur Leopard", 
          urgency: 'High', 
          location: "Ulaanbaatar‎, Mongolia", 
          date: "March 22, 2020",
          description: "The amur leopard is the most endangered animal in the world with less than 70 still in existence. We aim to change their narrative.",
          funding_goal: 14000.00,
          donation_id: 3,
          image: "https://unsplash.com/photos/kN5SquXgtX4",
          completed: false
        },
        {
          id: 3, 
          title: "Their Livelihood Depends On Us",
          animal: "Cross River Gorillas",
          urgency: 'High', 
          location: "Nigeria and Cameroon", 
          date: "March 3, 2020",
          description: "Dwindling numbers and lack of habitat have caused these gorillas to be some of the most endangered species in the world. Help us rebuild their population.",
          funding_goal: 2000.00,
          donation_id: 1,
          image: "https://unsplash.com/photos/UzNHIYD6Er8",
          completed: true
        },
      ]);
    });
};