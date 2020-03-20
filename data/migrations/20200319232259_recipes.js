exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();

      tbl
        .string("recipe_name", 255)
        .notNullable()
        .unique()
        .index();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();

      tbl
        .string("ingredients_name", 255)
        .notNullable()
        .unique()
        .index();
    })
    .createTable("steps", (tbl) => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.integer("step_number").notNullable();
      tbl.string("step_description", 255).notNullable();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.float("ingredient_quantity").notNullable();

      tbl.string("quantity_units", 255).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
