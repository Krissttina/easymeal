const Recipe = require("../models/recipeModel");

exports.getAll = () => Recipe.find().populate("owner");

exports.getOne = (recipeId) => Recipe.findById(recipeId).populate("owner");

exports.create = (recipeData) => Recipe.create(recipeData);

exports.edit = (recipeId, recipeData) => Recipe.findByIdAndUpdate(recipeId, recipeData);

exports.delete = (recipeId) => Recipe.findByIdAndDelete(recipeId);