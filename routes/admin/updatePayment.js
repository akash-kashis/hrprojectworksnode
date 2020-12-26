const express=require('express')
const router=express.Router()
const verify=require('../../middlewares/verifyadminToken')

const PostModel =require('../../models/Payment');

router.patch('/:IFID',verify,async (req,res)=>{
  const { TOTAL_SALARY,INVESTMENT_AMOUNT,TRAINING_FEE,OTHER_AMOUNT,INCOME,LAST_MONTH_BALANCE,OVERALL_TOTAL,FULL_AMOUNT,REQUIRED_AMOUNT,WITH_NEXT_SALARY,NEXT_MONTH_BALANCEE} =req.body
  const user= req.params.IFID;
  const updateQuery= {"IFID":user}
  console.log(user)
  console.log(req.body)
    try{
      const paymentData= await PostModel.findOne(updateQuery)
      if(paymentData)
      {
        const paymentId=paymentData._id;
        console.log(paymentId)
        const filter={"_id":paymentId}
        const result=await PostModel.findOneAndUpdate(filter,req.body,{new:true});
        res.status(200).send(result)
      }
      else{
        res.status(400).json({msg:"no data found"})
      }
   
    }catch(err){
       res.status(400).json({msg:err})
    }
  });

  module.exports=router;
  