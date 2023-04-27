const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Winningpercentage = sequelize.define('winning_percentages', {
        winning_percentage_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        players: {
            type: DataTypes.INTEGER,
        },
        player_1: {
            type: DataTypes.INTEGER,
        },
        player_2: {
            type: DataTypes.INTEGER,
        },
        player_3: {
            type: DataTypes.INTEGER,
        },
        player_4: {
            type: DataTypes.INTEGER,
        },
        created_at: {
            type: DataTypes.TIME,
        },
        updated_at: {
            type: DataTypes.TIME,
        },
        deleted_at: {
            type: DataTypes.TIME,
        }
    },
        {
            timestamps: false
        }
    );

    return Winningpercentage

};
