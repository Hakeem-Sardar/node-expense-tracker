const User = require("../../module/user/userModel");
// const knex = require("../config/dbConfig");
const httpCodes = require("http-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const baseController = require("../../utils/baseController");

require("dotenv").config();

class userController extends baseController {
  constructor() {
    super();
  }

  //   create user method
  register = async (req, res) => {
    try {
      const data = req.body;
      console.log(data)
      //   const hashpassword = await bcrypt.hash(data.password, 10);
      //   console.log(hashpassword, "hashshshshshshsh");

      const user = await User.query().insert({
        first_name: data.firstname,
        last_name: data.lastname,
        email: data.email,
        password: data.password,
      });
      const token = jwt.sign(data, process.env.SECRET_KEY);
      return res.status(this.status.OK).json({
        message: "signup successfully",
        user,
        token,
      });
    } catch (error) {
      console.log(error.message, error);
      return res.status(this.status.BAD_REQUEST).json({
        message: "unable to signup",
        error,
      });
    }
  };
  // login method
  //  passHash = (password)=>{

  //     const hashpassword = bcrypt.hashSync(password, 10);
  //     return hashpassword;

  // }

  userLogin = async (req, res) => {
    try {
      const data = req.body;

      const user = await User.query().where("email", "=", data.email);
      console.log(user[0])
      const token = jwt.sign({user},process.env.SECRET_KEY);
      const verify = jwt.verify(token,process.env.SECRET_KEY);
      console.log(verify,"skdfgjsdfgsdh")
      console.log(user)
      // const pass = this.passHash(data.password)
      if (user[0].password !== data.password) {
        return res.status(this.status.UNAUTHORIZED).send({ user: null });
      } else {
        return res.status(this.status.OK).json({
          message: "signup successfully",
          user,
          token
        });
      }
    } catch (error) {
      console.log(error.message, error);
      return res.status(this.status.BAD_REQUEST).json({
        message: "unable to signup",
      });
    }
  };
}

module.exports = userController;
