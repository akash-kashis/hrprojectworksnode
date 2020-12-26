const express=require('express');
const router=express.Router();

const getModel =require('../models/Payment');


router.get('/:IFID',async(req,res)=>{
   const ifid = req.params.IFID
     try{
        const query = { "IFID": ifid};
        const employee= await getModel.find(query);
        if(!employee) throw Error("something went wrong");
        res.status(200).json(employee);
     }
     catch(err){
        res.status(400).json({msg:err})
     }
});
module.exports=router

