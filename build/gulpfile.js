var gulp = require('gulp'),
    util = require('gulp-util'),
    tsc = require('gulp-typescript'),
    less = require('gulp-less'),
    pug = require('gulp-pug'),
    runSequence = require('run-sequence');
    nodemon = require('gulp-nodemon');

gulp.task('pug', function(){
    return gulp.src(['../src/public/**/*.pug'])
    .pipe(pug({
        // pug options here
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('less', function(){
    return gulp.src(['../src/public/**/*.less'])
    .pipe(less({
        //paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('ts', function(){
    return gulp.src(['../src/public/**/*.ts'])
    .pipe(tsc({
        module: 'amd',
        target: 'ES5',
        removeComments: true
    }))
    .on('error', util.log)
    .pipe(gulp.dest('./public/'));
});

gulp.task('compile-client', ['pug', 'less', 'ts']);

gulp.task('compile-server', function(){
    return gulp.src(['../src/**/*.ts', '!../src/typings/**', '!../src/public/**', '!../src/**/*.d.ts'])
    .pipe(tsc({
        module: 'commonjs',
        target: 'ES5',
        removeComments: true
    }))
    .on('error', util.log)
    .pipe(gulp.dest('./'));
});

gulp.task('compile', ['compile-server', 'compile-client']);

gulp.task('nodemon', function(){
    nodemon({
        script: 'server.js'
        , ext: 'html css js'
        , env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('default', function(){
    runSequence('compile', 'nodemon');
});