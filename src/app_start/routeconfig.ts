/// <reference path="../typings/index.d.ts" />

import * as express from 'express';
import * as core from "express-serve-static-core";

export function configureRoutes(app: core.Express): void{
    var router: core.Router = express.Router();
    // --- configure routings here ---
    
    // router.get('/url/to/whatever', function(req, res){
    //     res.send(someController.responseFunction());
    // })

    app.use('/', router);
    console.log('Routings succesfully configured!');
}

/*module RouteConfig{

    export function configureRoutes(app: core.Express): void{
        var router: core.Router = express.Router();
        // --- configure routings here ---
        
        // router.get('/url/to/whatever', function(req, res){
        //     res.send(someController.responseFunction());
        // })

        app.use('/', router);
        console.log('Routings succesfully configured!');
    }
}

/*var pipo = express();
RouteConfig.configureRoutes(pipo);//*/

/*export function configureRoutes(app: core.Express): void{
    console.log('fucking work!');
}*/