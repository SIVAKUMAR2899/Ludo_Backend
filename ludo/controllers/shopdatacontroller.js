const { coin_data } = require('../models');
const { booster_data } = require('../models');
const { gems_data } = require('../models');
const { dice_data } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const coin = db.coin_data;
const booster = db.booster_data;
const gems = db.gems_data;
const dice = db.dice_data;

const getshopdata = async (req, res) => {
    let user_id = req.body.user_id;
   
    const Coin = await coin.findAll({coin});
    const Booster = await booster.findAll({booster});
    const Gems = await gems.findAll({gems});
    const Dice = await dice.findAll({dice});
    
    const shopd = [{Coin},{Booster},{Gems},{Dice}];
    if(shopd){
        res.status(200).json({
            code: res.statusCode,
            message: 'Successfully',
            data: shopd
        });
    }else{
        return res.json({
            status:0,
            message:"Doesn't Show"
        });
    }
}

module.exports = {
    getshopdata
}