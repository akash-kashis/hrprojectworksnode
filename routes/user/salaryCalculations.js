const express=require('express')
const router=express.Router()
const Payment =require('../../models/Payment');
const User = require('../../models/User');
const verify=require('../../middlewares/verifyToken');


router.patch('/',verify,async (req,res)=>{
  const IFID=req.userData.IFID;
  const requiredAmount=req.body.requiredAmount
  const fullAmount=req.body.fullAmount
  const withnextSalary=req.body.withnextSalary
  const find=await Payment.findOne({ "IFID":IFID})
  const oId=find._id;
  const overalltotal=find.OVERALL_TOTAL
  console.log(find)
  console.log(oId)
  console.log(overalltotal)
  //selections 
    const RequiredAmount=0
    const FullAmount=0
    const NextSalary=0

  const filter={"_id":oId}
  const updateRequiredamount={"NEXT_MONTH_BALANCE":overalltotal-requiredAmount,
                              "REQUIRED_AMOUNT":requiredAmount,
                              "FULL_AMOUNT":FullAmount,
                               "WITH_NEXT_SALARY":NextSalary}
  const updateFullamount=    {"NEXT_MONTH_BALANCE":overalltotal-overalltotal,
                              "REQUIRED_AMOUNT":RequiredAmount,
                              "FULL_AMOUNT":FullAmount,
                              "WITH_NEXT_SALARY":NextSalary}
  const updatewithNextsalary={"NEXT_MONTH_BALANCE":overalltotal,
                              "REQUIRED_AMOUNT":RequiredAmount,
                              "FULL_AMOUNT":FullAmount,
                              "WITH_NEXT_SALARY":NextSalary}
                                
    try{
      if(requiredAmount)
      {
        const result=await Payment.findOneAndUpdate(filter,updateRequiredamount,{new:true});
        res.send(result)
      }
      else if(fullAmount=='fullamt')
      {
        const result=await Payment.findOneAndUpdate(filter,updateFullamount,{new:true});
        res.send(result)
      }
      else if(withnextSalary=='nxtsalary'){
        const result=await Payment.findOneAndUpdate(filter,updatewithNextsalary,{new:true});
        res.send(result)
      }
      else{
        res.status(400).send('You have not selected an option')
      }

     
    }catch(err){
       res.status(400).json({msg:err})
    }
  });

  module.exports=router;