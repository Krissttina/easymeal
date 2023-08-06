const { recipeModel } = require('../models/recipeModel');
//const { newPost } = require('./postController')

function getAllRecipes(req, res, next) {
    recipeModel.find()
        .populate('recipeId')
        .then(recipes => res.json(recipes))
        .catch(next);
}

function getRecipe(req, res, next) {
    const { recipeId } = req.params;

    recipeModel.findById(recipeId)
        .populate({
            path : 'recipe',
            populate : {
              path : 'userId'
            }
          })
        .then(recipe => res.json(recipe))
        .catch(next);
}

function createRecipe(req, res, next) {
    const recipeData = req.body;

    recipeModel.create({recipeData});
}

module.exports = {
    getAllRecipes,
    createRecipe,
    getRecipe,
}