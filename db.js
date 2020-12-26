const mongoose = require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
mongoose.connect(process.env.dburl,
{useNewUrlParser :true,useUnifiedTopology:true,useFindAndModify: false},(err) =>
{
 if(!err)
  console.log('Mongo Connection Success');
  else
  console.log('Error' +JSON.stringify(err,undefined,2));

});
module.exports = mongoose;