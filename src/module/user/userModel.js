const baseModel = require("../../utils/basemodel");



module.exports = class User extends baseModel{
    static tableName = "users"

    // static relationMappings = {
    //     relation: baseModel.HasManyRelation,
    //     modelClass : expenses,
    //     join:{
    //         from:"person.id",
    //         to:"expence.id"
    //     }
    // }


}

