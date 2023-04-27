const jwt = require('jsonwebtoken');
module.exports={
    checktoken : (req,res,next)=>{
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            jwt.verify(token,"abcd1234",(err,decoded)=>{
                if(err){
                    return res.json({
                        status:0,
                        message:"invalid token"
                    });
                }else{
                    req.decoded = decoded;
                    next();
                }
            });
        }else{
            return res.json({
                status:0,
                message:"unathorization token"
            });
        }
    }
};