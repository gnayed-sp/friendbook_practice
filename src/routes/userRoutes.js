const userController = require("../controllers/userController");

const express = require("express");
var router = express.Router();
router.get("/",userController.getAllUsers);

module.exports = router;