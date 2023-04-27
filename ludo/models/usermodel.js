const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('users', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        fb_id: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.TEXT,
        },
        email: {
            type: DataTypes.TEXT,
        },
        password:{
            type: DataTypes.TEXT,
        },
        userID:{
            type: DataTypes.TEXT,
        },
        mobile_no:{
            type: DataTypes.TEXT,
        },
        otp:{
            type: DataTypes.TEXT,
        },
        address:{
            type: DataTypes.TEXT,
        },
        city:{
            type: DataTypes.TEXT,
        },
        pin_code:{
            type: DataTypes.TEXT,
        },
        state:{
            type: DataTypes.TEXT,
        },
        referal:{
            type: DataTypes.TEXT,
        },
        referal_code:{
            type: DataTypes.TEXT,
        },
        game_ids:{
            type: DataTypes.TEXT,
        },
        avatar:{
            type: DataTypes.TEXT
        },
        balance:{
            type: DataTypes.INTEGER,
        },
        pan_card:{
            type: DataTypes.TEXT,
        },
        aadhar_card:{
            type: DataTypes.TEXT,
        },
        name_card:{
            type: DataTypes.TEXT,
        },
        date_birth:{
            type: DataTypes.TEXT,
        },
        paytm_number:{
            type: DataTypes.TEXT,
        },
        gpay_number:{
            type: DataTypes.TEXT,
        },
        upi_id:{
            type: DataTypes.TEXT,
        },
        pan_status:{
            type: DataTypes.INTEGER,
        },
        bank_status:{
            type: DataTypes.INTEGER,
        },
        mail_verified:{
            type: DataTypes.INTEGER,
        },
        status:{
            type: DataTypes.INTEGER,
        },
        version:{
            type: DataTypes.TEXT,
        },
        doj:{
            type: DataTypes.TEXT,
        },
        total_winning:{
            type: DataTypes.DOUBLE,
        },
        total_deposit:{
            type: DataTypes.DOUBLE,
        },
        total_bonus:{
            type: DataTypes.DOUBLE,
        },
        last_user_dice:{
            type: DataTypes.INTEGER,
        },
        total_gems:{
            type: DataTypes.INTEGER,
        },
        total_coins:{
            type: DataTypes.INTEGER,
        },
        join_date:{
            type: DataTypes.DATE,
        },
        bonus_enable:{
            type: DataTypes.TEXT,
        },
        ip_address:{
            type: DataTypes.TEXT,
        },
        country:{
            type: DataTypes.TEXT,
        },
        country_code:{
            type: DataTypes.TEXT,
        },
        what_is_your_favourite:{
            type: DataTypes.TEXT,
        }
    },
        {
            timestamps: false
        }
    );

    return Player

};