const { recipeModel } = require('../models/recipeModel');
const { recipeManager } = require('../manager/recipeManager');

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
    const {  recipesBody } = req.body;
    const { recipesId } = req.params;

  /*  console.log( {name, image,
        ingediants, instructions,
        prepTime, cookTime, servings});*/

    recipeManager.create({recipesBody, recipesId})
    .then(data => { //error
        console.log(`Saved successfully ${data}`);
        res.status(200).json(data)
    }).catch(next);
       res.send({error: err, msg: "Something went wrong"})
}

module.exports = {
    getAllRecipes,
    createRecipe,
    getRecipe,
}