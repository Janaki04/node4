const express = require("express");
const user=require('../controllers/details');

const article = express.Router();

article.route('/data').get(user)

module.exports=article;




