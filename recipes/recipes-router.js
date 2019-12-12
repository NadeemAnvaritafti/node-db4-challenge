const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();


router.get('/', (req, res) => {
    Recipes.getDishes()
    .then(dishes => {
        res.status(200).json(dishes);
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'Failed to get recipes' })
    })
});


router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(list => {
        if (!list[0]) {
            res.status(404).json({ message: 'invalid recipe id' })
        } else {
            res.status(200).json(list);
        }
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'Failed to get shopping list' })
    })
});


router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
    .then(instructions => {
        if (!instructions[0]) {
            res.status(404).json({ message: 'invalid recipe id' })
        } else {
            res.status(200).json(instructions);
        }
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'Failed to get recipe instructions' })
    })
});


module.exports = router;