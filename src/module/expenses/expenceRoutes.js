const express = require("express");
const expenceController = require("./expensesController")

const router = express.Router();

const {
    registerExpense,
    updateExpense,
    deleteExpence,
    getExpense
} = new expenceController();



router.post("/insertExpence",registerExpense);
router.patch("/updateExpence/:id",updateExpense);
router.delete("/deleteexpense/:id",deleteExpence);
router.get("/getAll/:userId",getExpense)




module.exports = router