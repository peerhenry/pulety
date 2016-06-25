"use strict";
var express = require('express');
var path = require('path');
function configureRoutes(app) {
    var rootPath = path.join(__dirname, '../public');
    app.use(express.static(rootPath));
    var servePath = path.join(__dirname, '../public/views');
    app.use(express.static(servePath));
    var dummyRouter = require('../controllers/dummy');
    app.use('/dummy/', dummyRouter);
}
exports.configureRoutes = configureRoutes;
