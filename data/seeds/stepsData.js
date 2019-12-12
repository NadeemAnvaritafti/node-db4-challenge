
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, instruction: 'Wash vegetables', dish_id: 1},
        {id: 2, step_number: 2, instruction: 'Dice tomatoes, cucumbers and onions', dish_id: 1},
        {id: 3, step_number: 3, instruction: 'Pour diced veggies in bowl', dish_id: 1},
        {id: 4, step_number: 1, instruction: 'Spread Peanut Butter on one slice of bread', dish_id: 2},
        {id: 5, step_number: 2, instruction: 'Spread Jelly on another slice of bread', dish_id: 2},
        {id: 6, step_number: 1, instruction: 'Put slice of ham and cheese on one slice of bread', dish_id: 3},
        {id: 7, step_number: 2, instruction: 'Add sliced tomato', dish_id: 3}
      ]);
    });
};
