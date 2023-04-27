const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Gems = sequelize.define('gems_data', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        gems_title: {
            type: DataTypes.TEXT,
        },
        purchase_value: {
            type: DataTypes.INTEGER,
        },
        gems_count: {
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

    return Gems

};