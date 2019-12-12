
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Tablespoon of Lime Juice'},
        {id: 2, name: 'Tomato'},
        {id: 3, name: 'Cucumber'},
        {id: 4, name: 'Red Onion'},
        {id: 5, name: 'Tablespoon of Mint'},
        {id: 6, name: 'Tablespoon of Olive Oil'},
        {id: 7, name: 'Teaspoon of Salt'},
        {id: 8, name: 'Teaspoon of Pepper'},
        {id: 9, name: 'Tablespoon of Peanut Butter'},
        {id: 10, name: 'Tablespoon of Jelly'},
        {id: 11, name: 'Slice of White Bread'},
        {id: 12, name: 'Slice of Ham'},
        {id: 13, name: 'Slice of American Cheese'}
      ]);
    });
};
