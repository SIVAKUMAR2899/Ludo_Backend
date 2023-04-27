const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Usergameinfo = sequelize.define('user_game_infos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        static_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignkey: true
        },
        json_data: {
            type: DataTypes.JSON,
        },
        date: {
            type: DataTypes.TIME,
        }
    },
        {
            timestamps: false
        }
    );

    return Usergameinfo

};