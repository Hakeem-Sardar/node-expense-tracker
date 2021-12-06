
const express = require("express");
const userRout = require("../src/module/user/userRout")
const expenceRout = require("./module/expenses/expenceRoutes")

const router = express.Router();


router.use("/user",userRout)
router.use("/expense",expenceRout)



module.exports = router;