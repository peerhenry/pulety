/// <reference path="../typings/index.d.ts" />

import * as express from 'express';
import * as core from "express-serve-static-core";
import { Express } from "express-serve-static-core";
import { Router } from "express-serve-static-core";
import * as path from 'path';

export function configureRoutes(app: Express): void{

    let rootPath: string = path.join(__dirname, '../public');
    app.use( express.static(rootPath) );

    let servePath: string = path.join(__dirname, '../public/views');
    app.use( express.static(servePath) );

    let dummyRouter: Router = require('../controllers/dummy');
    app.use('/dummy/', dummyRouter);

}