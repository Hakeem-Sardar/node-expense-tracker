
exports.up = function(knex) {
    return knex.schema.createTable("expenses",(table)=>{
        table.increments('id').primary();
        table.integer('amount',).notNullable();
        table.string('title', 255).notNullable();
        table.string("description",255).notNullable();
        table.string("comment",255);
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
        table.integer("user_id").unsigned();
        table.foreign("user_id").references("users.id");

    })
}

exports.down = function(knex) {
    return knex.schema.dropTable("expenses")
  
};
