const objection = require("objection");
const database =require("../config/dbConfig");

const { Model } = objection;

Model.knex(database);

module.exports = Model;

