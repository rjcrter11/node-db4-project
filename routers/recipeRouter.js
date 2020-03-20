const express = require("express");
const Recipes = require("./recipeModel");
const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Error retrieving recipes" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.getRecipeById(id)
    .then((recipe) => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: "Could not find valid id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ mesage: "Failed to get recipe" });
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ mesage: "Failed to get ingredients for shopping list " });
    });
});

router.get("/:id/instuctions", (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ mesage: "Failed to get instuctions for recipe" });
    });
});
