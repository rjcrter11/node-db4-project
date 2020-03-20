const express = require("express");

const Ingredients = require("./ingredientsModel");

const router = express.Router();

router.get("/:id/recipes", (req, res) => {
  Ingredients.getSingleIngredient(req.params.id)
    .then((ingredient) => {
      res.status(200).json(ingredient);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

module.exports = router;
