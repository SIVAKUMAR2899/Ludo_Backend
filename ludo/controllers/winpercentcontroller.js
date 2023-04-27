const { winning_percentages } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Winpercent = db.winning_percentages;


const getwinpercent = async (req, res) => {
    let winpercent = await Winpercent.findAll({});
    if(winpercent){
        return res.json({
            status:1,
            message:"successfull",
            data:winpercent
        })
    }else{
        return res.json({
            status:0,
            message:"WiningPercentage doesn't return successfully"
        })
    }
}

module.exports = {
    getwinpercent
}