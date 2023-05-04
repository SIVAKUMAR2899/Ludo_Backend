const { rooms } = require('../models');
const { users } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Room = db.rooms;
const Player = db.users;

const createroom = async (req, res) => {
    const body = req.body;

    let Roomid = Math.floor((Math.random() * 100000000) + 1);
    console.log(Roomid);

    const croom = await Room.create({id:null,room_id:Roomid,user_id:req.body.user_id,amount:req.body.amount,type:req.body.type,time:req.body.time});
    if(croom){
        res.status(200).json({
            code: res.statusCode,
            data: croom,
            message: 'Room created successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"Room doesn't created"
        });
    }
}

const getroominfo = async (req, res) => {
    let room_id = req.body.room_id
    console.log(room_id);
    let rusers = await Room.findOne({ where: { room_id: room_id } });
    let ruserid = rusers.user_id;
    // console.log(ruserid);

    let user = await Player.findOne({ where:{ user_id : ruserid}})
    // console.log(user);

    const total = new Object();
    total. id = rusers.id;
    total.room_id = rusers.room_id;
    total.user_id = rusers.user_id;
    total.amount = rusers.amount;
    total.type = rusers.type;
    total.time = rusers.time;
    total.name = user.name;
    if(rusers){
        return res.status(200).json({
            status:1,
            message :"successfull",
            data:total
        });
    }else{
        return res.json({
            status:0,
            message:"Sorry! Room info doesn't return"
        });
    }  
}

module.exports = {
    createroom,
    getroominfo
}