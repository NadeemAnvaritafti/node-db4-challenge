
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'Persian Salad'},
        {id: 2, name: 'PBJ'},
        {id: 3, name: 'Toasty'}
      ]);
    });
};
