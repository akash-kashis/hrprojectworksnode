const express=require('express');
const router=express.Router();
const key=process.env.key
const Cryptr = require('cryptr');
const cryptr = new Cryptr(key);
const User = require('../../models/User');
const jwt=require('jsonwebtoken');
// route for user Login

router.post('/', async(req,res,next) =>
{
  const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  };
  
  const { username,password} =req.body
  const usertypes="user"
  console.log(username)
  console.log(password)
  try {
        //finding the matching user
          const user = await User.findOne({ "email": username,"usertype" :usertypes});
          // $or: [{
          //   "email": username
          // }, {
          //   "IFID": username
          //   }
          // ]
     

          if(!user) 
            {
                res.status(400).send('Invalid username or password')
            }  
          const validationofpassword=await cryptr.decrypt(user.password);
          if((validationofpassword!=req.body.password))
            {
                res.status(400).send('Invalid username or password')
            }
            //Token Creating With Loggedin User Details
            
          const token=jwt.sign({_id:user._id,IFID:user.IFID,useType:user.usertype},process.env.TOKENSECRET)
          cookieOptions={
            secure:false,
            httpOnly:true,
            expires: new Date(
              Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
            )
          }
          
          //photo name designation ifid email department
          res.cookie('token', token, cookieOptions);  
          res.status(200).send("login successfull"); 
          
          

      }
      catch(error)
      {
          console.log(error)
      }
      
});


// const token=jwt.sign({_id:user._id,IFID:user.ifid,useType:user.usertype},process.env.TOKENSECRET)
module.exports=router

