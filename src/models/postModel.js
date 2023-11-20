const pool = require("../services/db");

module.exports.findUsersWhoLikeByPostID = (data,callback)=>{
    var sqlStmt = "SELECT * FROM user";
    pool.query(sqlStmt,callback);
}