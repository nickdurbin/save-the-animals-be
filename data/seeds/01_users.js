exports.seed = function(knex) {
  return knex('users')
    .then(function () {
      return knex('users').insert([
        {id: 1, email: "test@test.com", username: 'admin', password: "password", role: "admin"},
        {id: 2, email: "supporter@supporter.com", username: 'supporter', password: "password", role: "supporter"},
        {id: 3, email: "organization@organization.com", username: 'organization', password: "password", role: "organization"},
      ]);
    });
};