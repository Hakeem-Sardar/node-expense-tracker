// Update with your config settings.

module.exports = {



  development: {
    client: 'pg',
    connection: {
      database: 'expense-tracker',
      user:     'postgres',
      password: 'passpass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
