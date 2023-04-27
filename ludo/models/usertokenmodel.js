const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define('user_tokens', {
        token_id:{
            type: DataTypes.INTEGER,
            // allowNull: false,
            autoincrement: true,
            primaryKey: true
            
        },
        user_id:{
            type: DataTypes.INTEGER,
            foreignkey: true
        },
        device_token: {
            type: DataTypes.STRING,
            length:60000
        },
        time:{
            type: DataTypes.TIME
        }
    },
       {
           timestamps: false
       }
    );
    return Token
};