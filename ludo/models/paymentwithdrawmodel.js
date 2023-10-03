const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const paywithdraw = sequelize.define('payment_widthdrawal', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        withdraw_method: {
            type: DataTypes.TEXT,
        },
        method_id: {
            type: DataTypes.TEXT,
        },
        user_id: {
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
            type: DataTypes.INTEGER,
        },
        txnmsg: {
            type: DataTypes.TEXT,
        }
    },
        {
            timestamps: false
        }
    );

    return paywithdraw

};