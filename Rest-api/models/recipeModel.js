const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'Invalid URL'],
    },
    ingrediants: {
        type: String,
        required: [true, 'Ingrediants are required!'],
    },
    instructions: {
        type: String,
        required: [true, 'Instructions are required!'],
    },
    prepTime: {
        type: Number,
        required: true,
    },
    cookTime: {
        type: Number,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },

},
);

module.exports = mongoose.model('Recipe', recipeSchema);
