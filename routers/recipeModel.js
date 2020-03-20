const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getRecipeById(recipe_id) {
  return db("recipes")
    .where({ id: recipe_id })
    .first();
}

function getShoppingList(recipe_id) {
  return db
    .select(
      "recipes.recipe_name",
      "recipe_ingredients.ingredient_quantity",
      "recip_ingredients.quantity_units",
      "ingredients.ingredient_name"
    )
    .from("recipes")
    .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipe_id")
    .join("ingredients", " ingredients.id", "recipe_ingredients.ingredient_id")
    .where("recipes.id", recipe_id);
}

function getInstructions(recipe_id) {
  return db
    .select(
      "recipes.recipe_name",
      "steps.step_number",
      "steps.step_description"
    )
    .from("recipes")
    .join("steps", "recipes.id", "steps.recipe_id")
    .where("recipes.id", "=", recipe_id)
    .orderBy("steps.step_number");
}
