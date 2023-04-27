const { user_statistics } = require('../models');
const { user_game_infos} = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const UserStatic = db.user_statistics;
const Usergameinfo = db.user_game_infos;

const addUserstatic = async (req, res) => {
    const body = req.body;

    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);
      
    var gameplayjson = req.body.json_data.gameplayInfo;
    // console.log(gameplayjson);

    var json = req.body.json_data;
    // console.log(json);
    var someObj = {
        "userid": json.userid, "username": json.username, "totalCoin": json.totalCoin,"totalGems": json.totalGems,"level": json.level,"TournamentWin": json.TournamentWin,"PerformanceRating": json.PerformanceRating,
        "two": gameplayjson
    };
    var key = "two";
    delete someObj[key];
    console.log(someObj);

    
    let userstaticid = await UserStatic.findOne({ where: { user_id: req.body.user_id } });
    if(userstaticid){
        const users = await UserStatic.update({json_data:someObj},{ where: { user_id: req.body.user_id } });
        let usersid = await UserStatic.findOne({ where: { user_id: req.body.user_id } });
        let usid = usersid.id;
        // console.log(usid);
        const usergameinfo = await Usergameinfo.create({id:null,static_id:usid,user_id:req.body.user_id,json_data:gameplayjson,date:dateTime});
        if(users){
            res.status(200).json({
                code: res.statusCode,
                data: users,
                message: 'user update successfuly'
            });
        }else{
            return res.json({
                status:0,
                message:"User doesn't update"
            });
        }
    }else{
        const userstatic = await UserStatic.create({id:null,user_id:req.body.user_id,json_data:someObj,date:dateTime});
        let usersid = await UserStatic.findOne({ where: { user_id: req.body.user_id } });
        let usid = usersid.id;
        // console.log(usid);
        const usergameinfo = await Usergameinfo.create({id:null,static_id:usid,user_id:req.body.user_id,json_data:gameplayjson,date:dateTime});

        if(userstatic){
            res.status(200).json({
                code: res.statusCode,
                data: userstatic,
                message: 'UserStatics saved successfully'
            });
        }else{
            return res.json({
                status:0,
                message:"UserStatics doesn't saved"
            });
        }
    }





    // const userstatic = await UserStatic.create({id:null,user_id:req.body.user_id,json_data:someObj,date:dateTime});

    // // let userstaticid = await UserStatic.findOne({ where: { user_id: req.body.user_id } });
    // let usid = userstaticid.id;
    // console.log(usid);
    // const usergameinfo = await Usergameinfo.create({id:null,static_id:usid,user_id:req.body.user_id,json_data:gameplayjson,date:dateTime});

    // if(usergameinfo){
    //     res.status(200).json({
    //         code: res.statusCode,
    //         data: userstatic,
    //         message: 'UserStatics saved successfully'
    //     });
    // }else{
    //     return res.json({
    //         status:0,
    //         message:"UserStatics doesn't saved"
    //     });
    // }
}

module.exports = {
    addUserstatic
}