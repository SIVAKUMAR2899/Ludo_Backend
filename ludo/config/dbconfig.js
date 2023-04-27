var mysql = require('mysql');

module.exports = {
    HOST :"localhost",
    DB:"ludo",
    USER:"root",
    PASSWORD:"sivakumar12345",
    dialect:"mysql",

    pool:{
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

