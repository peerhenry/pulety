"use strict";
var express_1 = require('express');
var express = require('express');
var path = require('path');
var router = express_1.Router();
var servePath = path.join(__dirname, '../public/views/dummy');
router.use(express.static(servePath));
console.log('controller is using: ' + servePath);
module.exports = router;
