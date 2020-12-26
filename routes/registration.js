const express=require('express')
const router=express.Router()
const userModel =require('../models/User');
const key=process.env.key
const Cryptr = require('cryptr');
const cryptr = new Cryptr(key);
router.post('/',async(req,res)=>{
  const userType='user';
  const { ifid,name,email,designation,department} =req.body
  const password=req.body.password
  const encryptingPassword1 =  cryptr.encrypt(password);
    const user =new userModel
    ({
      'IFID':ifid,
      'name':name,
      'email': email,
      'designation': designation,
      'department': department,
      'password': encryptingPassword1,
      'confirm' : encryptingPassword1,
      'usertype': userType
    });
    try
    {
     const saved =await user.save();
     res.json(saved);
      res.status(200).send('Registered successfully')
      console.log("Registered Successfully")
    }
    catch(err)
    {
    res.status(400).send('Registered Failed')

    }
});


module.exports=router;