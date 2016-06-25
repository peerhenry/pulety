
/// <reference path="../typings/index.d.ts" />
import * as express from 'express';
import {Express} from 'express';
import * as http from 'http';
import * as path from 'path';
import * as bodyParser from 'body-parser';

export function setMiddleWare(app: Express): void{

    app.use( bodyParser.urlencoded({ extended: true }) );
    app.use( bodyParser.json() );

}