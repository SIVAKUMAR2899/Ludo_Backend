// const sequelize = require('sequelize');
const dbconfig = require('../config/dbconfig');

const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        // operatorsAliases: false,

        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.users = require('./usermodel')(sequelize, DataTypes)
db.user_tokens = require('./usertokenmodel')(sequelize, DataTypes)
db.chalanges = require('./chalangesmodel')(sequelize, DataTypes)
db.booster_purchases = require('./boostermodel')(sequelize, DataTypes)
db.dice_purchases = require('./dicemodel')(sequelize, DataTypes)
db.daily_bonus_transactions = require('./claimdailybonusmodel')(sequelize, DataTypes)
db.coin_data = require('./coindatamodel')(sequelize, DataTypes)
db.booster_data = require('./boosterdatamodel')(sequelize, DataTypes)
db.gems_data = require('./gemdatamodel')(sequelize, DataTypes)
db.dice_data = require('./dicedatamodel')(sequelize, DataTypes)
db.winning_percentages = require('./winningpercentagemodel')(sequelize, DataTypes)
db.user_statistics = require('./userstaticmodel')(sequelize, DataTypes)
db.user_game_infos = require('./usergameinfomodel')(sequelize, DataTypes)
db.app_daily_bonus = require('./dailybonusmodel')(sequelize, DataTypes)
db.rooms = require('./roommodel')(sequelize, DataTypes)
db.tournment_results = require('./resultmodel')(sequelize, DataTypes)
db.payment_widthdrawal = require('./paymentwithdrawmodel')(sequelize, DataTypes)
db.payment_history = require('./paymenthistorymodel')(sequelize, DataTypes)


db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db;