exports.seed = function(knex) {
  return knex('users')
    .then(function () {
      return knex('users').insert([
        {
          id: 1, 
          email: "test@test.com", 
          username: 'user', 
          password: "password", 
          first_name: "Bob", 
          last_name: "Barker"
        },
        {
          id: 2, 
          email: "test1@test1.com", 
          username: 'user1', 
          password: "password", 
          first_name: "Michelle", 
          last_name: "Obama"
        },
        {
          id: 3, 
          email: "test2@test2.com", 
          username: 'user2', 
          password: "password", 
          first_name: "Baker", 
          last_name: "Mayfield"
        },
      ]);
    });
};