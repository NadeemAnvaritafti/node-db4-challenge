const db = require('../data/db-config');

module.exports = {
    getDishes,
    getRecipes,
    getInstructions
}

function getDishes() {
    return db('dishes');
}

function getRecipes(id) {
    return db('recipes')
        .select('dishes.id', 'dishes.name as Recipe', 'ingredients.name as Ingredients', 'recipes.ingredient_quantity')
        .join('dishes', 'recipes.dish_id', '=', 'dishes.id')
        .join('ingredients', 'recipes.ingredient_id', '=', 'ingredients.id')
        .where('dish_id', '=', id);
}

function getInstructions(id) {
    return db('steps')
        .select('dishes.id', 'dishes.name', 'steps.step_number', 'steps.instruction')
        .join('dishes', 'steps.dish_id', '=', 'dishes.id')
        .where('dish_id', '=', id);
}