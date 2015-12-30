/**
 * Created by zhoucl on 2015/12/30.
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('watch', function(){
   watch(config.less.all, function(){   //监听所有的less
       gulp.start('less');              //出现修改，立即执行less任务
   });
});