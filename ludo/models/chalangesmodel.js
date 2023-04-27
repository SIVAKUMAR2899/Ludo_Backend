const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const chalange = sequelize.define('chalanges', {
        chalange_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        chalange_name: {
            type: DataTypes.TEXT,
        },
        bid_amount: {
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.INTEGER,
        },
        chalange_date: {
            type: DataTypes.TIME,
        }
    },
        {
            timestamps: false
        }
    );

    return chalange

};
