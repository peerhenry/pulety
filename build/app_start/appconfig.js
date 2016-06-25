"use strict";
var bodyParser = require('body-parser');
function setMiddleWare(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
}
exports.setMiddleWare = setMiddleWare;
