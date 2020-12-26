const express=require('express');
const router=express.Router();

const getModel =require('../models/Salary');

router.get('/:IFID', async(req,res)=>{
     try{ 
        const ifid = req.params.IFID
        console.log(ifid)
        const query = { "IFID": ifid};
        const employeeSalary= await getModel.find(query);
        if(!employeeSalary) throw Error("something went wrong");
        res.status(200).json(employeeSalary);
     }
     catch(err){
        res.status(400).json({msg:err})
     }
});
module.exports=router
