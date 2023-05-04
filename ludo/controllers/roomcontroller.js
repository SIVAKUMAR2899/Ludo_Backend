const { rooms } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Room = db.rooms;

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

module.exports = {
    createroom
}