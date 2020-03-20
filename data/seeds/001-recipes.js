exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, recipe_name: "Thas some soup" },
        { id: 2, recipe_name: "Oh lawd is that soup" },
        { id: 3, recipe_name: "you betch thats soup" }
      ]);
    });
};
