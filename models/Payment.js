const Mongoose = require("mongoose");
const Payment= new Mongoose.Schema({
          SL_NO:Number,
          IFID:Number,
          NAME:String,
          TOTAL_SALARY:Number,
          INVESTMENT_AMOUNT:Number,
          TRAINING_FEE:Number,
          OTHER_AMOUNT:Number,
          INCOME:Number,
          LAST_MONTH_BALANCE:Number,
          OVERALL_TOTAL:Number,
          FULL_AMOUNT:Number,
          REQUIRED_AMOUNT:Number,
          WITH_NEXT_SALARY:Number,
          NEXT_MONTH_BALANCE:Number
});

module.exports = Mongoose.model('Payment', Payment);