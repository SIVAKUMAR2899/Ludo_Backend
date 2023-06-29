const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
        const result = sequelize.define('tournment_results', {
            result_id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            user_id: {
                type: DataTypes.INTEGER,
            },
            room_id: {
                type: DataTypes.TEXT,
            },
            game_id: {
                type: DataTypes.INTEGER,
            },
            level: {
                type: DataTypes.INTEGER,
            },
            position: {
                type: DataTypes.TEXT,
            },
            amount: {
                type: DataTypes.INTEGER,
            },
            time: {
                type: DataTypes.TIME,
            },
            upt_time: {
                type: DataTypes.TIME,
            }
        },
            {
                timestamps: false
            }
        );
    
        return result
    
    };