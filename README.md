# pulety
Nodejs with pug, less and typescript.

The project uses gulp as task runner. All *.pug, *.less and *.ts files are compiled from the src folder to the build folder. This way, the server will not need to perform view compilation. 

All the usual commands for a node project are run from the build folder, with one exception:
Type definitions must installed in the src folder, so commands like 
`typings install dt~<your-definition> --save`
must be run from within the src folder.
Git commands should be executed from the root folder.

Running gulp will compile the source code, run the server, watch for changes and enable livereload.