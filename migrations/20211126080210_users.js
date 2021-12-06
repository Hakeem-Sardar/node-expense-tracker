
exports.up = function(knex) {
    return knex.schema.createTable("users",(table)=>{
        table.increments('id').primary();
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.string("email",255).unique().notNullable();
        table.string("password").notNullable();
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("users")
  
};
