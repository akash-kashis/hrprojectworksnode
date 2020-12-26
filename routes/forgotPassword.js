const nodemailer=require('nodemailer');
const express=require('express');
const router=express.Router();
const key=process.env.key
const Cryptr = require('cryptr');
const cryptr = new Cryptr(key);
const User = require('../models/User');

router.post('/',async (req,res)=>{
   try{
         const forgotEmail=req.body.forgotEmail
         console.log(forgotEmail)
         const user = await User.findOne({ "email":forgotEmail}) 
    if(!user)
    {
        return res.status(400).send('Invalid email')
    }
    else{
        const validationofpassword=await cryptr.decrypt(user.password);
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.emailu,
                pass:process.env.emailp
                }
            })
             mailOptions=
                {
                from:'websoulhrserver@gmail.com',
                to: forgotEmail,
                subject:'Password recovery',
                text:'Password Recovery email from HR Server...Your password is '+validationofpassword
                }
        
            transporter.sendMail(mailOptions,(err,data)=>{
            if(err){
                console.log('Error Ocurrs');
             }
            else{
                console.log('Email Sent Successfully')
            }
             })
             return res.status(200).send('Email sent successfully')
      }
    }
    
catch(error){
    console.log(error)
} 
})
module.exports=router