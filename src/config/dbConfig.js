require("dotenv").config();
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database :process.env.DB_NAME
    }
  });
  knex.raw("SELECT 1").then(() => {
    console.log("database connected");
})
.catch((e) => {
    console.log("database not connected");
    console.error(e);
});


  module.exports = knex;