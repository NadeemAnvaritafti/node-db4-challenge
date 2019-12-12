
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, ingredient_id: 1, ingredient_quantity: 3},
        {dish_id: 1, ingredient_id: 2, ingredient_quantity: 3},
        {dish_id: 1, ingredient_id: 3, ingredient_quantity: 5},
        {dish_id: 1, ingredient_id: 4, ingredient_quantity: 2},
        {dish_id: 1, ingredient_id: 5, ingredient_quantity: 3},
        {dish_id: 1, ingredient_id: 6, ingredient_quantity: 3},
        {dish_id: 1, ingredient_id: 7, ingredient_quantity: 3},
        {dish_id: 1, ingredient_id: 8, ingredient_quantity: 3},
        {dish_id: 2, ingredient_id: 11, ingredient_quantity: 3},
        {dish_id: 2, ingredient_id: 9, ingredient_quantity: 3},
        {dish_id: 2, ingredient_id: 10, ingredient_quantity: 3},
        {dish_id: 3, ingredient_id: 11, ingredient_quantity: 3},
        {dish_id: 3, ingredient_id: 12, ingredient_quantity: 3},
        {dish_id: 3, ingredient_id: 13, ingredient_quantity: 3},
        {dish_id: 3, ingredient_id: 2, ingredient_quantity: 1},
        {dish_id: 3, ingredient_id: 7, ingredient_quantity: 1},
        {dish_id: 3, ingredient_id: 8, ingredient_quantity: 1}
      ]);
    });
};
