const express=require('express');
const router=express.Router();
router.get('/',async(req,res)=>{
   try{
        res.clearCookie('admintoken')
        res.status(200).json({msg:'Logged Out Successfully'});
     }
     catch(err){
        res.status(400).json({msg:err})
     }
});

module.exports=router