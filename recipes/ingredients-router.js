const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();


router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;

    Recipes.getRecipesForIngredient(id)
    .then(list => {
        if (!list[0]) {
            res.status(404).json({ message: 'invalid ingredient id' })
        } else {
            res.status(200).json(list);
        }
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'Failed to get recipes' })
    })
});



module.exports = router;