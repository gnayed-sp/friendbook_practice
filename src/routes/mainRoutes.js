const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

const express = require("express");

const router = express.Router();

router.use("/user",userRoutes);

//CREATE NEW route fr /post API here


module.exports = router;