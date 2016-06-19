var gulp = require('gulp'),
    util = require('gulp-util'),
    tsc = require('gulp-typescript'),
    less = require('gulp-less'),
    pug = require('gulp-pug'),
    runSequence = require('run-sequence');

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
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('ts', function(){
    return gulp.src(['../src/public/**/*.less'])
    .pipe(tsc({
        module: 'amd',
        target: 'ES5'
    }))
    .on('error', uril.log)
    .pipe(gulp.dest('./public/'));
});

gulp.task('compile-client', ['pug', 'less', 'ts']);

gulp.task('compile-server', function(){
    return gulp.src(['../src/**/*.ts', '!../src/typings/**', '!../src/public/**'])
    .pipe(tsc({
        module: 'commonjs',
        target: 'ES5'
    }))
    .on('error', util.log)
    .pipe(gulp.dest('./'));
});

gulp.task('compile', ['compile-server', 'compile-client']);

gulp.task('default', function(){
    runSequence('compile', 'watch');
});