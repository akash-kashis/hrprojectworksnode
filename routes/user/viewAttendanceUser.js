const express=require('express');
const router=express.Router();
const verify=require('../../middlewares/verifyToken')

const getModel =require('../../models/Attendance');

router.get('/', verify,async(req,res)=>{
    
     try{
        const user=req.userData.IFID;
        const query = { "IFID": user};
        const employeeattendance= await getModel.find(query);
        if(!employeeattendance) throw Error("something went wrong");
        res.status(200).json(employeeattendance);
     }
     catch(err){
        res.status(400).json({msg:err})
     }
});
module.exports=router
