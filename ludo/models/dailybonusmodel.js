const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Dailybonus = sequelize.define('app_daily_bonus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        day_name: {
            type: DataTypes.INTEGER,
            foreignkey: true
        },
        bonus: {
            type: DataTypes.INTEGER,
        }
    },
        {
            timestamps: false
        }
    );

    return Dailybonus

};