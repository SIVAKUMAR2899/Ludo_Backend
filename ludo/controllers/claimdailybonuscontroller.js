const { daily_bonus_transactions } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Dailybonus = db.daily_bonus_transactions;

const addbonus = async (req, res) => {
    const body = req.body;

    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    console.log(body);

    let userid = req.body.user_id;
    console.log(userid);

    let Bonusid = req.body.bonus_id;
    let Bonus;
    
    if(Bonusid == 1)
    {
        Bonus = 100;
    }else if(Bonusid == 2)
    {
        Bonus = 100;
    }else if(Bonusid == 3)
    {
        Bonus = 150;
    }else if(Bonusid == 4)
    {
        Bonus = 200;
    }else if(Bonusid == 5)
    {
        Bonus = 250;
    }else if(Bonusid == 6)
    {
        Bonus = 300;
    }else if(Bonusid == 7)
    {
        Bonus = 500;
    }else{
        Bonus = 0;
    }
    console.log(Bonus);

    let cdbonus= await Dailybonus.findOne({ where : { user_id : userid , bonus : Bonus }}); 

    if(cdbonus){
        return res.json({
            status:0,
            message:"Bonus Already Claimed"
        })
    }else{
        const Dbonus = await Dailybonus.create({id:null,user_id:req.body.user_id,bonus:Bonus,date:dateTime});
        if(Dbonus){
            res.status(200).json({
                code: res.statusCode,
                data: Dbonus,
                message: 'Bonus claimed successfully'
            });
        }else{
            return res.json({
                status:0,
                message:"Bonus doesn't claimed"
            });
        }

    }
        
    }



module.exports = {
    addbonus
}