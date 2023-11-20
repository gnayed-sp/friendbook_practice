const userModel = require("../models/userModel");

module.exports.getAllUsers = (req,res,next)=>{
    userModel.selectAllUsers((err,result)=>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    })
}