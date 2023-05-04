const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('rooms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        room_id: {
            type: DataTypes.TEXT,
        },
        user_id: {
            type: DataTypes.TEXT,
            foreignkey: true
        },
        amount: {
            type: DataTypes.TEXT,
        },
        type: {
            type: DataTypes.TEXT,
        },
        time: {
            type: DataTypes.TIME,
        }
    },
        {
            timestamps: false
        }
    );

    return Room

};