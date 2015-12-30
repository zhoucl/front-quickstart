/**
 * Created by zhoucl on 2015/12/30.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var config = require('../config');

gulp.task('less', function(){
    return gulp.src(config.less.src)
        .pipe(less(config.less.settings))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(config.less.dest));
});

gulp.task('less-min', function() {
    return gulp.src(config.less.src)
        .pipe(less(config.less.settings))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename(function(path) {
            path.basename += "-min";
        }))
        .pipe(gulp.dest(config.less.dest));
});