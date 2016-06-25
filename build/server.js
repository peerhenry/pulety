"use strict";
var express = require('express');
var rc = require('./app_start/routeconfig');
var config = require('./app_start/appconfig');
var app = express();
config.setMiddleWare(app);
rc.configureRoutes(app);
var port = process.env.PORT || 3000;
app.set('port', port);
var server = app.listen(port, function () {
    console.log('Express server listening on port: ' + server.address().port);
});
