/// <reference path="../../typings/globals/require/index.d.ts" />

var config: RequireConfig = {
  baseUrl: '../scripts/', // relative to the view
  paths: {
    // define libraries here
    // eg. ../lib/jquery/jquery
    "sinon": "../../node_modules/sinon/pkg/sinon"
  },
  shim:{

  }
}

requirejs.config( config );