const express=require('express');
const router=express.Router();
const multer=require('multer')
const User = require('../../models/User');
const uploadImage=require('../../middlewares/uploadPhoto')
const verify=require('../../middlewares/verifyadminToken')
const { diskStorage } = require('multer');

const filterObj=(obj,...allowedFields)=>{
const newObj={};
Object.keys(obj).forEach(el=>{
    if(allowedFields.includes(el)) newObj[el]=obj[el]
})
return newObj;
}

router.patch('/edit',verify,uploadImage.single('photo'),async (req,res)=>{
    const filteredBody=filterObj(req.body,'name','email','designation','department','photo')
    console.log(req.body)
    try{
        if(req.file){
            filteredBody.photo=req.file.filename
        }
        const user=req.userData.id;
        const objectid =user;
        const filter={"_id":objectid}
        console.log(objectid)
        const employee=await User.findOneAndUpdate(filter,filteredBody,{new:true})
        res.status(200).send(employee)
    }catch(err)
	{
       res.status(400).json({msg:err})
    	}
});

module.exports=router;
