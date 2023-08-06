const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { recipeController } = require('../controllers');

// middleware that is specific to this router

router.get('/', recipeController.getAllRecipes);
router.post('/', auth(), recipeController.createRecipe);

router.get('/:recipeId', recipeController.getRecipe);
//router.put('/:themeId/posts/:postId', auth(), recipeController.editPost);
//router.delete('/:themeId/posts/:postId', auth(), recipeController.deletePost);

module.exports = router