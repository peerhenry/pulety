/// <reference path="../typings/index.d.ts" />

import * as express from 'express';
import * as core from "express-serve-static-core";
import { Express } from "express-serve-static-core";
import { Router, Request, Response } from 'express';
import * as path from 'path';

import dummy = require('../controllers/dummy');

function setDummyRouting(app: Express){
    let dummyRouter: Router = Router();

    let dummyServePath: string = path.join(__dirname, '../public/views/dummy');
    dummyRouter.use( express.static(dummyServePath) );

    dummyRouter.get('/test', function(req : Request, res: Response){
        res.send(dummy.getDummyMessage());
    })

    app.use('/dummy/', dummyRouter);
}

export function configureRoutes(app: Express): void{

    let rootPath: string = path.join(__dirname, '../public');
    app.use( express.static(rootPath) );

    let servePath: string = path.join(__dirname, '../public/views');
    app.use( express.static(servePath) );

    setDummyRouting(app);
}