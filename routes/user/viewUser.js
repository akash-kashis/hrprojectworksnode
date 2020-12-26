const express=require('express');
const router=express.Router();
const userModel =require('../../models/User');
const verify=require('../../middlewares/verifyToken')
router.get('/',verify,async(req,res)=>{
   try{
        const user=req.userData.id;
        const objectid =user;
        const query = { "_id": objectid};
        const userDatas= await userModel.find(query).select("photo name designation ifid email department");
        console.log(userDatas)
        if(!userDatas) throw Error("something went wrong");
        res.status(200).json(userDatas);
     }
     catch(err){
        res.status(400).json({msg:err})
     }
});

module.exports=router
