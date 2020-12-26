const express=require('express');
const router=express.Router();
const verify=require('../../middlewares/verifyToken')

const getModel =require('../../models/Payment');

router.get('/', verify,async(req,res)=>{
    
     try{
      const user=req.userData.IFID;
        const objectid =user;
        const query = { "IFID": objectid};
        const employeePayment= await getModel.find(query);
        if(!employeePayment) throw Error("something went wrong");
        res.status(200).json(employeePayment);
     }
     catch(err){
        res.status(400).json({msg:err})
     }
});
module.exports=router
