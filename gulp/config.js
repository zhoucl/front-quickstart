/**
 * Created by zhoucl on 2015/12/30.
 */
var src = './src';

var dest = './build';

module.exports = {
    less : {
        all: src + "/less/**/*.less",   //所有的less
        src: src + "/less/*.less",      //需要编译的less
        dest: dest + "/css",            //存储css的目标文件夹
        settings: {                     //其他setting设置
        }
    },

    js: {
        all: src + "/js/**/*.js",       //所有的js文件
        src: src + "/js/app/**/*.js",   //需要处理的js文件
        cpsrc: src + "/js/lib/**/*.js",  //不需要压缩的js文件
        dest: dest + "/js",             //存储js的目标文件夹
        settings: {                     //其他setting设置
        }
    },

    html: {
        all: src + "/html/**/*.html",   //所有的html文件
        src: src + "/html/**/*.html",   //需要处理的html文件
        dest: dest + "/html",           //存储html的目标文件夹
        settings: {                     //其他setting设置
        }
    }
}