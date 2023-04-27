const { booster_purchases } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Booster = db.booster_purchases;


const addBooster = async (req, res) => {
    const body = req.body;

    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    let etime = req.body.booster_id;
    let updatedDuration;
    
    if(etime == 1)
    {
        updatedDuration =current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + (current.getDate()+1)+ ' ' + cTime;
    }else if(etime == 3)
    {
        updatedDuration =current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + (current.getDate()+2)+ ' ' + cTime;
    }else{
        updatedDuration = cDate + ' ' + cTime;
    } 
    console.log(updatedDuration);
    
      
    const users = await Booster.create({id:null,user_id:req.body.user_id,booster_id:req.body.booster_id,from_time:dateTime,exp_time:updatedDuration,status:req.body.status});
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

module.exports = {
    addBooster
}