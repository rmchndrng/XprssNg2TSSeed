var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell')
var runSequence = require('run-sequence');

gulp.task('build:server', function () {
    var tsProject = ts.createProject(path.resolve('server/tsconfig.json'));
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

gulp.task('watch-server', ['build:server'], function () {
    gulp.watch('server/**/*.ts', ['build:server']);
});

gulp.task('build:client:watch', function () {
    return gulp.src('')
    .pipe(
        shell(['ng build -w --output-path ../server/client'],{cwd:'client'})
    )
});

gulp.task('build', function (callback) {   
    runSequence('watch-server','build:client:watch', callback);
});

gulp.task('default', ['build']);