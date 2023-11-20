const pool = require("../services/db");

module.exports.selectAllUsers = (callback)=>{
    var sqlStmt = "SELECT * FROM user";
    pool.query(sqlStmt,callback);
}

module.exports.findUsersWhoLikeP