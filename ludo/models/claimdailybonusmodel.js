const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const ClaimDailybonus = sequelize.define('daily_bonus_transactions', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignkey: true
        },
        bonus: {
            type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.TIME,
        }
    },
        {
            timestamps: false
        }
    );

    return ClaimDailybonus

};