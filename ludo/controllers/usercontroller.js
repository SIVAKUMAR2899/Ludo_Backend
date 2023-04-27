const { users } = require('../models');
const { user_tokens } = require('../models');
const { chalanges } = require('../models');
const db = require('../models');
const { sign } = require('jsonwebtoken');
const { hashSync,genSaltSync,compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const { text } = require('body-parser');
const Player = db.users;
const Token = db.user_tokens;
const Chalange = db.chalanges;

//1.post method

const addUser = async (req, res) => {
    const salt = genSaltSync(10);
    const body = req.body;
    body.password = hashSync(req.body.password,salt);
    //  console.log(body.password);
    const users = await Player.create(body);
    console.log(users);
    if(users){
        res.status(200).json({
            code: res.statusCode,
            data: users,
            message: 'user saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"user doesn't saved"
        });
    }
}

// 2.login

const login = async (req,res) => {
    const { email,password } = req.body;
    let user = await Player.findOne({ where : { email : email}});
    if(!user){
        return res.json({
            success : 0,
            message : "invalid email"
        });
    }
    let userid = user.user_id;
    console.log(userid);
    
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    const result = compareSync(password,user.password);
    if(result){
         const newtoken = jwt.sign({ result: user},"abcd1234",{expiresIn:3600});
         console.log(newtoken);

         let token = await Token.findOne({ where : { user_id : userid}}); 
         console.log(token);
             if(token)
             {
                let updatetoken = await Token.update({device_token:newtoken},{where : {user_id:userid}});
                console.log(updatetoken);
            }else{
                let token =await Token.create({token_id:null,user_id:userid,device_token:newtoken,time:dateTime});
                console.log(token);
            }


        return res.json({
            code:1,
            message:"login success",
            token:newtoken
        });
    }else{
            return res.json({
                code : 0,
                message : "Invalid password",

            });
    }  
}

// 3.update password

const updatePassword = async (req,res) => {

    const { email,oldpassword,password } = req.body;
    let user = await Player.findOne({ where : { email : email}});
    if(!user){
        return res.json({
            success : 0,
            message : "invalid email"
        });
    }
    let userid = user.user_id;
    console.log(userid);

    const Password = compareSync(oldpassword,user.password);
    console.log(Password);

    if(Password){
       
        const salt = genSaltSync(10);
        const hpassword = await hashSync(req.body.password,salt);
        console.log(hpassword);
       
        const new_password = await Player.update({password: hpassword},{ where: { user_id: userid}});
        console.log(new_password);

        return res.json({
            status:1,
            message:"Password updated successfully"
        });
    }else{
        return res.json({
            status:0,
            message:"Password doesn't update"
        });
    }
}

// 4.Forgot password

const forgotPassword = async (req,res) => {

    const { email,what_is_your_favourite,password } = req.body;
    let user = await Player.findOne({ where : { email : email}});
    if(!user){
        return res.json({
            success : 0,
            message : "invalid email"
        });
    }
    let userid = user.user_id;
    console.log(userid);
    
    const Favourite = (what_is_your_favourite === user.what_is_your_favourite);
    if(Favourite){
       
        const salt = genSaltSync(10);
        const hpassword = await hashSync(req.body.password,salt);
        console.log(hpassword);
       
        const new_password = await Player.update({password: hpassword},{ where: { user_id: userid}});
        console.log(new_password);

        return res.json({
            status:1,
            message:"Password updated successfully"
        });
    }else{
        return res.json({
            status:0,
            message:"Password doesn't update"
        });
    }
}

//5.get all users

const getAllUser = async (req, res) => {
    let users = await Player.findAll({Player});
    if(users){
        res.status(200).send(users);
    }else{
        return res.json({
            status:0,
            message:"User doesn't return successfully"
        })
    }
}

//6.get by id

const getOneUser = async (req, res) => {
    let user_id = req.params.user_id
    let users = await Player.findOne({ where: { user_id: user_id } });
    if(users){
        return res.status(200).json({
            data:users
        });
    }else{
        return res.json({
            status:0,
            message:"User is invalid"
        });
    }  
}

//7.edit profile method

const updateUser = async (req, res) => {
    let user_id = req.params.user_id
    const users = await Player.update(req.body, { where: { user_id: user_id } });
    if(users){
        res.status(200).json({
            data: users,
            code: res.statusCode,
            message: 'User update success'
        });
    }else{
        return res.json({
            status:0,
            message:"User update failed"
        });
    }
}



//8.delete method

const deleteUser = async (req, res) => {
    let user_id = req.params.user_id
    await users.destroy({ where: { user_id: user_id } })
    res.status(200).json({
        code: res.statusCode,
        data: users,
        message: 'Deleted successfully'
    })
}

// 9.purchase gems 

const PurchaseGems = async (req, res) => {
    const { user_id,gems_id } = req.body;

    let gemsid = req.body.gems_id;
    let gems;

    if(gemsid == 3){
        gems = 500;
    }else if(gemsid == 5){
        gems = 1000;
    }else if(gemsid == 6){
        gems=500;
    }

    let user = await Player.findOne({ where: { user_id: user_id } });
    let usergems = user.total_gems;
    console.log(usergems);

    let totalgems = usergems + gems;
    console.log(totalgems);

    const Gemscount = await Player.update({total_gems: totalgems}, { where: { user_id: user_id } });
    if(Gemscount){
        res.status(200).json({
            data: Gemscount,
            code: res.statusCode,
            message: 'User update success'
        });
    }else{
        return res.json({
            status:0,
            message:"User update failed"
        });
    }
}

// 10.purchase coin 

const PurchaseCoin = async (req, res) => {
    const { user_id,coin_id } = req.body;

    let coinid = req.body.coin_id;
    let coins;

    if(coinid == 1){
        coins = 10000;
    }else if(coinid == 3){
        coins = 1000;
    }
    let user = await Player.findOne({ where: { user_id: user_id } });
    let usercoins = user.total_coins;
    console.log(usercoins);

    let totalcoins = usercoins + coins;
    console.log(totalcoins);

    const Coinscount = await Player.update({total_coins: totalcoins}, { where: { user_id: user_id } });
    if(Coinscount){
        res.status(200).json({
            data: Coinscount,
            code: res.statusCode,
            message: 'User update success'
        });
    }else{
        return res.json({
            status:0,
            message:"User update failed"
        });
    }
}

// 11.Ad coin 

const AdCoin = async (req, res) => {
    const { user_id,coin_amount } = req.body;

    let coinamount = req.body.coin_amount;
  
    let user = await Player.findOne({ where: { user_id: user_id } });
    let usercoins = user.total_coins;
    console.log(usercoins);

    let totalcoins = usercoins + coinamount;
    console.log(totalcoins);

    const Coinscount = await Player.update({total_coins: totalcoins}, { where: { user_id: user_id } });
    if(Coinscount){
        res.status(200).json({
            data: Coinscount,
            code: res.statusCode,
            message: 'User update success'
        });
    }else{
        return res.json({
            status:0,
            message:"User update failed"
        });
    }
}

// 12.Balance datails

const BalanceDetails = async (req, res) => {
    let user_id = req.body.user_id;
    let Balancedetail = await Player.findOne({ where: { user_id: user_id } });
    if(Balancedetail){
        return res.status(200).json({
            status:1,
            message:"successfully",
            data:{total_winning  : Balancedetail.total_winning,
                  total_deposit  : Balancedetail.total_deposit,
                  total_bonus    : Balancedetail.total_bonus,
                  balance        : Balancedetail.balance
            }
        });
    }else{
        return res.json({
            status:0,
            message:"User_id is invalid"
        });
    }  
}

//13.get all chalange

const getAllChalange = async (req, res) => {
  
    

    let challange = await Chalange.findAll({Chalange});

    var total = [];
    var tdata = [];
    var userid = [];

    for (var i = 0; i < challange.length; i++) {

        let chalange_id = challange[i].chalange_id;
        let chalange_name = challange[i].chalange_name;
        let bid_amount = challange[i].bid_amount;

        let users = await Player.findAll({Player});
        for (var j = 0; j < users.length; j++) {
            userid = users[j].user_id;
            
        
        console.log("userid"+userid);
        var user = await Player.findOne({ where: { user_id: userid } });

        const dataObj = new Object();
        dataObj.user_id = user.user_id;
        dataObj.username = user.name;
        dataObj.email = user.email;

        tdata.push(dataObj)
        }
        const userObj = new Object();
        userObj.challenge_id = chalange_id;
        userObj.challenge_name = chalange_name;
        userObj.Bid_amount = bid_amount;
       
        total.push(userObj);
        
    }
    console.log(total)

    if(total){
        return res.status(200).json({
            data:[total,{"userdata":tdata}]
        })
    }else{
        return res.json({
            status:0,
            message:"Chalanges doesn't return successfully"
        })
    }
}


module.exports = {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    login,
    updatePassword,
    forgotPassword,
    PurchaseGems,
    PurchaseCoin,
    AdCoin,
    BalanceDetails,
    getAllChalange
};