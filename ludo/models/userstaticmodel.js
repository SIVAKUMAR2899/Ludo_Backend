const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const UserStatic = sequelize.define('user_statistics', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
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

    return UserStatic

};