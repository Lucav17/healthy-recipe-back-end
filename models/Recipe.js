// Importing Node packages required for schema
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const RecipeSchema = new Schema(
  {
    recipeName: {type: String},
    recipeImage: {type: String},
  }
);

module.exports = mongoose.model("Recipe", RecipeSchema);