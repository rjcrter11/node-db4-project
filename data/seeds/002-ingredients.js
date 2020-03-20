exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, ingredient_name: "tomates" },
        { id: 2, ingredient_name: "noice sauce" },
        { id: 3, ingredient_name: "cut-up chickies" },
        { id: 3, ingredient_name: "potato hands" },
        { id: 3, ingredient_name: "pig strips" },
        { id: 3, ingredient_name: "salties" }
      ]);
    });
};
