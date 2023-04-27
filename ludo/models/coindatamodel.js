const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Coin = sequelize.define('coin_data', {
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
        coin_count: {
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

    return Coin

};
