const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Dice = sequelize.define('dice_data', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
        },
        purchase_value: {
            type: DataTypes.INTEGER,
        },
        require_asset: {
            type: DataTypes.TEXT,
        },
        iconurl: {
            type: DataTypes.TEXT,
        }
    },
        {
            timestamps: false
        }
    );

    return Dice

};