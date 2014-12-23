'use strict';

var gulp = require('gulp');
var p = require('gulp-load-plugins')();
var to5 = require('gulp-6to5');

gulp.task('build', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(p.jshint('.jshintrc')) // check formating
    .pipe(p.jshint.reporter('default'))
    .pipe(to5()) // ES6 JS code to ES5
    .pipe(p.concat('main.js'))
    .pipe(gulp.dest('dist'))
    .pipe(p.rename({suffix: '.min'}))
    .pipe(p.uglify().on('error', p.util.log)) // minify
    .pipe(gulp.dest('dist'))
    .pipe(p.notify({ message: 'Build task complete' })); // system notification
});