const express=require('express')
const router=express.Router()
const verify=require('../../middlewares/verifyadminToken')

const PostModel =require('../../models/Salary');

router.patch('/:IFID',verify,async (req,res)=>{
  const { TOTAL_ATTENDENCE, GRADE_BASIC_PAY, SALARY,TRAINING_FEES,BONUS,NIGHT_SHIFT, RENT,OTHER,TOTAL_SALARY} =req.body
  const user= req.params.IFID;
  const updateQuery= {"IFID":user}
  console.log(user)
  console.log(req.body)
    try{
      const salaryData= await PostModel.findOne(updateQuery)
      if(salaryData)
      {
        const salaryId=salaryData._id;
        console.log(salaryId)
        const filter={"_id":salaryId}
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