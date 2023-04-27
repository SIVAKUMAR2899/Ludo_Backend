const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Booster = sequelize.define('booster_purchases', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignkey: true
        },
        booster_id: {
            type: DataTypes.INTEGER,
        },
        from_time: {
            type: DataTypes.TIME,
        },
        exp_time: {
            type: DataTypes.TIME,
        },
        status: {
            type: DataTypes.INTEGER,
        }
    },
        {
            timestamps: false
        }
    );

    return Booster

};