/// <reference path='typings/globals/node/index.d.ts' />
/// <reference path='typings/globals/express/index.d.ts' />
/// <reference path="app_start/routeconfig.ts" />

import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

var app = express();

// parsing req/res
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true, encoded: false })); // parse application/...
app.use(bodyParser.json()); // parse application/json

// set static directory
app.use(express.static(path.join(__dirname, 'public')));

// routes
import * as rc from './app_start/routeconfig';
rc.configureRoutes(app);

var port = process.env.PORT || 3000;

// run app
var server = app.listen(port, function(){
    // initialize
    console.log('Express server listening on port: ' + server.address().port);
})
