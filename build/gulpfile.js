var gulp = require('gulp'),
    util = require('gulp-util'),
    tsc = require('gulp-typescript'),
    less = require('gulp-less'),
    pug = require('gulp-pug'),
    runSequence = require('run-sequence');
    

gulp.task('compile', ['compile-server', 'compile-client']);

gulp.task('compile-client', ['pug', 'less', 'ts']);