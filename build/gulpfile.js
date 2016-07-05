var gulp = require('gulp');
var util = require('gulp-util');
var tsc = require('gulp-typescript');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var pug = require('gulp-pug');
var runSequence = require('run-sequence');
var nodemon = require('gulp-nodemon');
var cache = require('gulp-cached');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var Server = require('karma').Server;

var serverTypescript = ['../src/**/*.ts', '!../src/typings/**', '!../src/public/**', '!../src/**/*.d.ts'];

gulp.task('pug', function(){
    return gulp.src(['../src/public/**/*.pug'])
    .pipe(cache('pugCache'))
    .pipe(pug({
        // pug options here
    }))
    .pipe(gulp.dest('./public/'))
    .pipe(livereload());
});

gulp.task('less', function(){
    return gulp.src(['../src/public/**/*.less'])
    .pipe(cache('lessCache'))
    .pipe(less({
        //paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(autoprefixer({
        browsers: [
            '> 1%',
            'last 2 versions',
            'firefox >= 4',
            'safari 7',
            'safari 8',
            'IE 8',
            'IE 9',
            'IE 10',
            'IE 11'
        ],
        cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/'))
    .pipe(livereload());
});

gulp.task('ts', function(){
    return gulp.src(['../src/public/**/*.ts'])
    .pipe(cache('tsCache'))
    .pipe(tsc({
        module: 'amd',
        target: 'ES5',
        removeComments: true
    }))
    .on('error', util.log)
    .pipe(gulp.dest('./public/'))
    .pipe(livereload());
});

gulp.task('compile-client', ['pug', 'less', 'ts']);

gulp.task('compile-server', function(){
    return gulp.src(serverTypescript)
    .pipe(cache('serverCache'))
    .pipe(tsc({
        module: 'commonjs',
        target: 'ES5',
        removeComments: true
    }))
    .on('error', util.log)
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['compile-server', 'compile-client']);

gulp.task('compile', ['compile-server', 'compile-client']);

gulp.task('nodemon', function(){
    nodemon({
        script: 'server.js'
        , ext: 'html css js'
        , env: { 'NODE_ENV': 'development' }
        , ignore: 'public/**'
    })
    .on('restart', function(){
        gulp.src('server.js')
        .pipe(livereload())
        .pipe(notify('Reloading page, please wait...'));
    });
});

gulp.task('livereload-listen', function(){
    livereload.listen();
});

gulp.task('karma', function(done){
new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
}, done).start();
})

gulp.task('watch-server', function(){
    gulp.watch(serverTypescript, ['compile-server']);
});

gulp.task('watch-client', function(){
    gulp.watch('../src/public/**/*.pug', ['pug']);
    gulp.watch('../src/public/**/*.less', ['less']);
    gulp.watch('../src/public/**/*.ts', ['ts']);
});

gulp.task('watch', ['watch-server', 'watch-client']);

gulp.task('default', function(){
    runSequence('compile', 'livereload-listen', 'nodemon', 'watch');
});