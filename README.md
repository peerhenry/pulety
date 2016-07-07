# PuLeTy
Pug, Less and Typescript!

## Why PuLeTy?
####1. Build a web app using *ZERO* HTML, CSS and Javascript!
Build your entire web app by writing only in Pug (instead of HTML), LESS (instead of CSS) and TypeScript (instead of Javascript).

####2. Require *ZERO* server compilation!
With the included gulp file, all Pug, Less and TypeScript will be compiled before starting the server. Thus, the server is spared from having to perform any view compilation/transpilation. All files are precompiled and need only be served. No runtime compilation whatsoever!

####3. Quickstart your web app!
Don't waste precious time setting up your node development environment. Get started immediately after cloning/downloading this project.

## Stuff included in PuLeTy

- Mocha, Chai, Karma and Sinon for unit testing.
- RequireJS for usage of client-side AMD modules.
- Gulp for task running, with a pipeline that performs minimal compilation upon saving a file.
- Gulp-Nodemon for automatic server restarting after server code compilation (client code compilation needs not and will not restart the server).
- Livereload for automatically refreshing Chrome.
- One dummy for each of the following: controller, router, view folder, style, script, test for the server, test for the client.
- A .bowerrc file for installing client libraries (like bootstrap or angular) to public/libs.

## Setup Guide

1. After cloning or pulling the source, open a command shell in the build folder and run `npm install` to download all package dependencies.
2. Run `gulp` from the build folder. This will compile source code from "src" to "build", start the server, start livereload and watch for changes.

## Developing from PuLeTy

- Install typescript definitions from the `src` folder. `typings install dt~<your-definition> --global --save`
- Run git commands from the root folder. Better yet, use an editor with integrated git support.
- All other commands (eg. npm install, gulp, bower install) should be run from the `build` folder.

## Required globally installed packages

required: gulp, typings, bower
recommended: typescript, nodemon, mocha

## Notes

The project is setup in such a way that all relevant shell commands (excluding git) can be executed from the build folder, with one exception:
Type definitions must installed from the src folder, so commands like 
`typings install dt~<your-definition> --global --save`
must be run from within the src folder.
Of course, Git commands should be executed from the root folder.

Did I say zero javascript? Well... you might want to tweak the gulp file to your liking and I could seriously not be bothered to write that in typescript.
Close enough to zero anyway, ok?