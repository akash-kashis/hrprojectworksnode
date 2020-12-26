
const Mongoose = require("mongoose");

//Employee Model without any fixed schema
const Attendance= new Mongoose.Schema({
          SL_NO:Number,
          IFID:Number,
          NAME:String,
          WORK_HOUR:Number,
          SHIFT:String,
          TOTAL_ATTENDENCE:Number
  });

module.exports = Mongoose.model('Attendance', Attendance);