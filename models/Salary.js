const Mongoose = require("mongoose");

const Salary= new Mongoose.Schema({
  SL_NO:Number,
  IFID:Number,
  NAME:String,
  TOTAL_ATTENDENCE:Number,
  SALARY:Number,
  TRAINING_FEES:Number,
  BONUS:Number,
  NIGHT_SHIFT:Number,
  RENT:Number,
  OTHER:Number,
  TOTAL_SALARY:Number,
  GRADE_BASIC_PAY:Number

  });

module.exports = Mongoose.model('Salary', Salary);