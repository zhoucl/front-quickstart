/**
 * Created by zhoucl on 2015/12/30.
 */
var gulp = require('gulp');
var config = require('../config');

gulp.task('copy', ['copy-js']);

gulp.task('copy-js', function() {
    return gulp.src(config.js.cpsrc)
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('copy-html', function() {
    return gulp.src(config.html.src)
})