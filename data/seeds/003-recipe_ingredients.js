exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        {
          id: 1,
          recipe_id: 1,
          ingredient_id: 1,
          ingredient_quantity: 13,
          quantity_units: "stalks"
        },
        {
          id: 2,
          recipe_id: 1,
          ingredient_id: 2,
          ingredient_quantity: 2,
          quantity_units: "tablespoons"
        },
        {
          id: 3,
          recipe_id: 1,
          ingredient_id: 3,
          ingredient_quantity: 0.5,
          quantity_units: "galon"
        },
        {
          id: 4,
          recipe_id: 1,
          ingredient_id: 4,
          ingredient_quantity: 1,
          quantity_units: "pound"
        },
        {
          id: 5,
          recipe_id: 1,
          ingredient_id: 11,
          ingredient_quantity: 1,
          quantity_units: "pinch"
        },

        {
          id: 6,
          recipe_id: 2,
          ingredient_id: 5,
          ingredient_quantity: 0.25,
          quantity_units: "pound"
        },
        {
          id: 7,
          recipe_id: 2,
          ingredient_id: 6,
          ingredient_quantity: 1,
          quantity_units: "whole"
        },
        {
          id: 8,
          recipe_id: 2,
          ingredient_id: 7,
          ingredient_quantity: 2,
          quantity_units: "strips"
        },
        {
          id: 9,
          recipe_id: 2,
          ingredient_id: 8,
          ingredient_quantity: 1,
          quantity_units: "slice"
        },

        {
          id: 10,
          recipe_id: 3,
          ingredient_id: 9,
          ingredient_quantity: 1,
          quantity_units: "gallon"
        },
        {
          id: 11,
          recipe_id: 3,
          ingredient_id: 10,
          ingredient_quantity: 1,
          quantity_units: "hunk"
        },
        {
          id: 12,
          recipe_id: 3,
          ingredient_id: 11,
          ingredient_quantity: 2,
          quantity_units: "pinches"
        }
      ]);
    });
};
