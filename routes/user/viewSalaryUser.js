const express=require('express');
const router=express.Router();
const verify=require('../../middlewares/verifyToken')

const getModel =require('../../models/Salary');

router.get('/', verify,async(req,res)=>{
    
     try{
      const user=req.userData.IFID;
        const objectid =user;
        const query = { "IFID": objectid};
        const employeeSalary= await getModel.find(query);
        if(!employeeSalary) throw Error("something went wrong");
        res.status(200).json(employeeSalary);
     }
     catch(err){
        res.status(400).json({msg:err})
     }
});
module.exports=router
