/**
 * Created by zhoucl on 2015/12/30.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var config = require('../config');

gulp.task('jsmin', function() {
    return gulp.src(config.js.src)
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += "-min";
        }))
        .pipe(gulp.dest(config.js.dest));
});