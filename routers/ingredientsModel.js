const db = require("../data/dbConfig");

module.exports = {
  getSingleIngredient
};

function getSingleIngredient(ingredient_id) {
  return db
    .select("recipes.recipe_name", "ingredients.ingredient_name")
    .from("recipes")
    .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipe_id")
    .join("ingredients", "ingredient.id", "recipe_ingredients.ingredient_id")
    .where("ingredients.id", "ingredient_id");
}
