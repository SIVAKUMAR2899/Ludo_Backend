const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
        const Booster = sequelize.define('booster_data', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            booster_title: {
                type: DataTypes.TEXT,
            },
            purchase_value: {
                type: DataTypes.INTEGER,
            },
            valid_for: {
                type: DataTypes.INTEGER,
            },
            iconurl: {
                type: DataTypes.TEXT,
            }
        },
            {
                timestamps: false
            }
        );
    
        return Booster
    
    };