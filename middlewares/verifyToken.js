const jwt=require('jsonwebtoken');
verification=function (req,res,next)
    {
        //Getting token
        const token=req.cookies.token
        try
            {
                //verifying token
                const verifiedData =jwt.verify(token,process.env.TOKENSECRET)
                req.userData={
                    id: verifiedData._id,
                    IFID: verifiedData.IFID,
                    usertype:verifiedData.usertype
                  }
                next();
            }
        catch(err)
        {
            return res.status(200).json({
                message:"Authorisation Failed",
               
              })
        }
    }
    module.exports=verification