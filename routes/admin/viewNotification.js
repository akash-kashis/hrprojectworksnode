const express=require('express');
const router=express.Router();
const verify=require('../../middlewares/verifyadminToken')

const getnotification =require('../../models/Notification');



router.get('/',verify,async(req,res)=>{
    try{
        
        const notificationlist= await getnotification.find();
        if(!notificationlist) throw Error("something went wrong");
        res.status(200).json(notificationlist);
    }catch(err){
       res.status(400).json({msg:err})
    }
});
module.exports=router