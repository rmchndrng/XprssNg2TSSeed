var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:server', function () {
    var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
    var tsResult = gulp.src([
        'server/**/*.ts',
        '!server/typings/browser/**/*.ts',
        '!server/typings/browser.d.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.resolve('./server')))
});

gulp.task('build',['build:server']);

gulp.task('default', ['build']);