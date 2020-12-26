const express=require('express');
const router=express.Router();
const app=express()
const notification =require('../../models/Notification');
const User=require('../../models/User')
const verify=require('../../middlewares/verifyToken')


router.post('/',verify, async(req,res) =>
{
    const paymentMessage=req.body.messagePayment
    const messageType='Payment-Notification'
    const IFID=req.userData.IFID;
    const photo=await User.findOne({"ifid":IFID}).select("photo")
    console.log(IFID)
    
    const post = new notification
    ({
        message : paymentMessage,
        'IFID': IFID,
        'photo':photo,
        messageType: messageType
    });
    try
    {
        saved = await post.save();
        res.json(saved);
    }
    catch(err)
    {
        res.json({message :error});
    }

})

module.exports=router
