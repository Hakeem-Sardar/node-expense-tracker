const express = require("express");
const userController = require("../user/user.controller")


const Router = express.Router();


 const{
  register,
  userLogin
 } = new userController();


 Router.post("/createUser",register);
Router.post("/login",userLogin);










module.exports=Router