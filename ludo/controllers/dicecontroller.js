const { dice_purchases } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Dice = db.dice_purchases;

const adddice = async (req, res) => {
    const body = req.body;
    const dice = await Dice.create(body);
    if(dice){
        res.status(200).json({
            code: res.statusCode,
            data: dice,
            message: 'Dice saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"Dice doesn't saved"
        });
    }
}

module.exports = {
    adddice
}