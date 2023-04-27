    const db = require('../models');
    module.exports = {
    verifytoken : async (req,res,next)=>{
    const Token = db.user_tokens;
    const Player = db.users;
    let user_id = req.params.user_id
    // console.log(user_id);
    let users = await Token.findOne({ where: { user_id: user_id } });
    // console.log(users);
    let usertoken =req.headers.authorization;
    let reqtoken = users.device_token;
    let slicetoken = usertoken.slice(7);
    // console.log(reqtoken);
    // console.log(slicetoken);
 
    let tokenverify =slicetoken.localeCompare(reqtoken);
    // console.log(tokenverify);
    if(tokenverify==0){
        next();
    }else{
        return res.json({
            status:0,
            message:"The token doesn't match"
        });
    };
  }
};


