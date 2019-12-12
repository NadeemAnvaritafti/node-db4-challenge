const db = require('../data/db-config');

module.exports = {
    getDishes,
    getShoppingList,
    getInstructions,
    getRecipesForIngredient
}

function getDishes() {
    return db('dishes');
}

function getShoppingList(id) {
    return db('recipes')
        .select('dishes.id', 'dishes.name as recipe', 'ingredients.name as ingredient', 'recipes.ingredient_quantity')
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

function getRecipesForIngredient(id) {
    return db('recipes')
        .select('ingredients.id', 'ingredients.name as ingredient', 'dishes.name as recipeName')
        .join('dishes', 'recipes.dish_id', '=', 'dishes.id')
        .join('ingredients', 'recipes.ingredient_id', '=', 'ingredients.id')
        .where('ingredient_id', '=', id);
}