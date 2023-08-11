const { recipeModel } = require('../models/recipeModel');
const { recipeManager } = require('../manager/recipeManager');

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
    const {  
        name,
        image,
        ingediants,
        instructions,
        prepTime,
        cookTime,
        servings 
    } = req.body;

    console.log( {name, image,
        ingediants, instructions,
        prepTime, cookTime, servings});

    recipeManager.create({
    name,
    image,
    ingediants,
    instructions,
    prepTime,
    cookTime,
    servings
    })
    .then(data => { //error
        console.log(`Saved successfully ${data}`);
        res.status(200).json(data)
    }).catch(next);
       // res.send({error: err, msg: "Something went wrong"})
}

module.exports = {
    getAllRecipes,
    createRecipe,
    getRecipe,
}