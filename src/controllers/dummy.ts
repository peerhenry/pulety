/// <reference path='../typings/globals/express/index.d.ts' />
import { Router } from 'express';
import { Request } from 'express';
import { Response } from 'express';
import * as express from 'express';
import * as path from 'path';

let router: Router = Router();

let servePath: string = path.join(__dirname, '../public/views/dummy');
router.use( express.static(servePath) );

console.log('controller is using: ' + servePath);

module.exports = router;