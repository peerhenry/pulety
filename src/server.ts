/// <reference path='typings/globals/node/index.d.ts' />
/// <reference path='typings/globals/express/index.d.ts' />
/// <reference path='typings/globals/body-parser/index.d.ts' />
/// <reference path="app_start/routeconfig.ts" />

import * as express from 'express';
import * as rc from './app_start/routeconfig';
import * as config from './app_start/appconfig';

var app: express.Express = express();

config.setMiddleWare(app);
rc.configureRoutes(app);

var port = process.env.PORT || 3000;
app.set('port', port);
var server = app.listen(port, function(){
    // initialize
    console.log('Express server listening on port: ' + server.address().port);
})
