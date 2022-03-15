const express = require("express");
const article = require("../routes/article");



const router = express.Router();

router.use("/", article);


module.exports = router;


