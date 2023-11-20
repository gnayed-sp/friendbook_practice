require('dotenv').config(); //read .env file and set environment variables if you want to use it

const mysql = require('mysql2');

//the config is hardcoded
const setting = {
    connectionLimit : 10, //set limit to 10 connection
    host : "localhost",
    user : "root",
    password : "YOUR PASSWORD HERE",
    database : "friendbook_db",
    multipleStatements: true, //allow multiple sql statements
    dateStrings: true //return date as string instead of Date object
}

const pool = mysql.createPool(setting);

module.exports = pool;