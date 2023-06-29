const { tournment_results } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Result = db.tournment_results;


const addresult = async (req, res) => {
    const body = req.body;

    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);
  
    const cresults = await Result.create({result_id:null,user_id: req.body.user_id,room_id:req.body.room_id,game_id:req.body.game_id,level:req.body.level,position:req.body.position,amount:req.body.amount,time:dateTime,upt_time:dateTime});
    if(cresults){
        res.status(200).json({
            code: res.statusCode,
            message: 'user saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"user doesn't saved"
        });
    }
}

const updateresult = async (req, res) => {
    let {user_id,room_id} = req.body;
    let user = await Result.findOne({ where: { user_id: user_id } });
    let resultid = user.result_id;
    let time = user.time;
    console.log(time);

    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    const users = await Result.update({result_id:resultid,user_id: req.body.user_id,room_id:req.body.room_id,game_id:req.body.game_id,level:req.body.level,position:req.body.position,amount:req.body.amount,time:time,upt_time:dateTime}, { where: { user_id: user_id , room_id : room_id} });
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

module.exports = {
    addresult,
    updateresult
}