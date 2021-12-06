const expenseModel = require("../expenses/expencesModel");
const baseController = require("../../utils/baseController");
const httpCodes = require("http-codes");

class expenceController extends baseController {
  constructor() {
    super();
  }

  // insert expense method

  registerExpense = async (req, res) => {
    try {
      const data = req.body;
      const user = await expenseModel.query().insert({
        amount: data.amount,
        title: data.title,
        description: data.description,
        comment:data.comment,
        user_id: data.user_id,
      });
      return res.status(this.status.OK).json({
        message: "expense created",
        user,
      });
    } catch (error) {
      console.log(error.message, error);
      return res.status(this.status.BAD_REQUEST).json({
        message: "unable to insert expense",
      });
    }
  };

  //   update expense method
  updateExpense = async (req, res) => {
    try {
      const data = req.body;
      const user = await expenseModel
        .query()
        .update({
          amount: data.amount,
          title: data.title,
          comment:data.comment,
          description: data.description,
          user_id: data.user_id,
        })
        .where("id", "=", req.params.id);

      return res.status(this.status.OK).json({
        message: "user updated",
        user,
      });
    } catch (error) {
      console.log(error.message, error);
      return res.status(this.status.BAD_REQUEST).json({
        message: "unable to update",
      });
    }
  };

  //   delete expense method
  deleteExpence = async (req, res) => {
    try {
      const user = await expenseModel
        .query()
        .delete()
        .where("id", "=",req.params.id);
        return res.status(this.status.OK).json({
            message:"expence deleted successfully",
            user
        })
    } catch (error) {
      console.log(error, error.message);
      return res.status(this.status.BAD_REQUEST).json({
        message: "unable to delete expense",
      });
    }
  };
//   getting all expenses method 
getExpense = async (req,res)=>{
    try {
        const user = await expenseModel.query().where("user_id","=",req.params.userId);
        console.log(user)
        return res.status(this.status.OK).json({
            message:"getting all users",
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(this.status.BAD_REQUEST).json({
            message: "unable to delete expense",
          });
    }
}


}

module.exports = expenceController;
