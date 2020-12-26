const express=require('express');
const router=express.Router();
const app=express()
const notification =require('../../models/Notification');
const User=require('../../models/User')
const verify=require('../../middlewares/verifyToken')



router.post('/',verify, async(req,res) =>
{
    const attendanceMessage =req.body.messageAttendance;
    const messageType='Attendance-Notification'
    const IFID=req.userData.IFID;
    const photo=await User.findOne({"ifid":IFID}).select("photo")
    console.log(IFID)
    
    const post = new notification
    ({
        message : attendanceMessage,
        'IFID': IFID,
        'photo':photo,
        messageType: messageType
    });
    try
    {
        saved = await post.save();
        res.status(200).json(saved);
    }
    catch(err)
    {
        res.status(400).json({message :error});
    }

})

module.exports=router
