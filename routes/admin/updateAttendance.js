const express=require('express')
const router=express.Router()
const verify=require('../../middlewares/verifyadminToken')
const PostModel =require('../../models/Attendance');

router.patch('/:IFID',verify,async (req,res)=>{
  const { WORK_HOUR,SHIFT,TOTAL_ATTENDENCE} =req.body
  const user= req.params.IFID;
  const updateQuery= {"IFID":user}
  console.log(user)
  console.log(req.body)
    try{
      const attendenceData= await PostModel.findOne(updateQuery)
      if(attendenceData)
      {
        const attendenceId=attendenceData._id;
        console.log(attendenceId)
        const filter={"_id":attendenceId}
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
  