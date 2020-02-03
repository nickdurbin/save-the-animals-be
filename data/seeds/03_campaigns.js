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
          image: "https://unsplash.com/photos/6DSID8Ey9-U",
          completed: false,
          org_id: 1
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
          image: "https://unsplash.com/photos/kN5SquXgtX4",
          completed: false,
          org_id: 2
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
          image: "https://unsplash.com/photos/UzNHIYD6Er8",
          completed: true,
          org_id: 3,
        },
        {
          id: 4,
          title: "Australia Relief",
          animal: "Kiolas",
          urgency: "High",
          location: "Australia",
          date: "April 28, 2020",
          description: "We are raising money to help with the relief of the Australian fires.",
          funding_goal: 25000,
          image: "https://unsplash.com/photos/CIMk0FSOrAE",
          completed: false,
          org_id: 4
        },
        {
          id: 5,
          title: "Australian Wildlife Restoration",
          animal: "Kangaroo",
          urgency: "High",
          location: "Australia",
          date: "April 29, 2020",
          description: "We are raising money to help with the relief of the Australian fires.",
          funding_goal: 42000,
          image: "https://unsplash.com/photos/yLxQRYpuwqg",
          completed: false,
          org_id: 4
        },
        {
          id: 6,
          title: "Rebuild the Sea Life",
          animal: "Hawksbill Turtle",
          urgency: "Low",
          location: "Tampa Bay, Florida",
          date: "September 1, 2020",
          description: "We are raising money to help rebuild the Hawksbill Turtle population.",
          funding_goal: 6000,
          image: "https://unsplash.com/photos/dYex29Ge6X0",
          completed: false,
          org_id: 5
        },
      ]);
    });
};