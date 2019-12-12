
exports.up = function(knex) {
  return knex.schema
    .createTable('dishes', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .notNullable()
            .unique();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .notNullable()
            .unique();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number')
            .notNullable();
        tbl.text('instruction')
            .notNullable();

        // Foreign Key
        tbl.integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('recipes', tbl => {
        tbl.primary(['dish_id', 'ingredient_id']);
        tbl.integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients');
        tbl.float('ingredient_quantity')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("dishes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes") 
};
