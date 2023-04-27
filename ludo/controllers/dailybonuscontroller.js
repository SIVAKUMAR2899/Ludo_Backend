const { app_daily_bonus } = require('../models');
const { daily_bonus_transactions } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const AppDailybonus = db.app_daily_bonus;
const Dailybonus = db.daily_bonus_transactions;

const getdailybonus = async (req, res) => {
    let bonus = await AppDailybonus.findAll({AppDailybonus});

    var curr;
    curr = new Date;
    console.log(curr);
    var Sun = curr.getDate() - curr.getDay();
    // console.log(Sun);
    var Mon = Sun + 1;
    var Tue = Sun + 2;
    var Wed = Sun + 3;
    var Thu = Sun + 4;
    var Fri = Sun + 5;
    var Sat = Sun + 6;

    var sunday = new Date(curr.setDate(Sun));
    var monday = new Date(curr.setDate(Mon));
    var tuesday = new Date(curr.setDate(Tue));
    var wednesday = new Date(curr.setDate(Wed));
    var thursday = new Date(curr.setDate(Thu));
    var friday = new Date(curr.setDate(Fri));
    var saturday = new Date(curr.setDate(Sat));

    let claimdate;
    let days;
    let total = [];
   for (var i=0; i<bonus.length; i++){

        let bid = bonus[i].id;
        let bday = bonus[i].day_name;
        let bvalue = bonus[i].bonus;

        if(bid == 1){
            days = sunday;
        }else if(bid == 2){
            days = monday;
        }else if(bid == 3){
            days = tuesday;
        }else if(bid == 4){
            days = wednesday;
        }else if(bid == 5){
            days = thursday;
        }else if(bid == 6){
            days = friday;
        }else if(bid == 7){
            days = saturday;
        }
        console.log(days);
     
        var checkdate = (days==curr);
        console.log(checkdate);
        if( days == curr){
            claimdate = true;
        }else{
            claimdate = false;
        }

        var bonusObject = new Object();
        bonusObject.Bonus_id = bid;
        bonusObject.Name = bday;
        bonusObject.Date = days;
        bonusObject.BonusType = "coin";
        bonusObject.BonusValue = bvalue;
        bonusObject.Status = claimdate;
        
        total.push(bonusObject);
   }

    let dbonus = total;
     
    if(dbonus){
       return res.json({
        status:1,
        data:total
       })
    }else{
        return res.json({
            status:0,
            message:"Dailybonus doesn't return successfully"
        })
    }

}
module.exports = {
    getdailybonus
}