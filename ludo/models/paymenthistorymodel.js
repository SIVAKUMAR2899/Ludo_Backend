const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const payhistory = sequelize.define('payment_history', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        game_id: {
            type: DataTypes.INTEGER,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        time: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.TEXT,
        },
        txnid: {
            type: DataTypes.TEXT,
        },
        txnamount: {
            type: DataTypes.INTEGER,
        },
        respcode: {
            type: DataTypes.INTEGER,
        },
        banktxnid: {
            type: DataTypes.TEXT,
        },
        txnmid: {
            type: DataTypes.TEXT,
        },
        txnmsg: {
            type: DataTypes.TEXT,
        }
    },
        {
            timestamps: false
        }
    );

    return payhistory

};