var creds = require("./gulp-creds.js");

var gulp = require('gulp');
var watch = require('gulp-watch');
var debug = require('gulp-debug');
var spsave = require('gulp-spsave');
var changed = require('gulp-changed');

gulp.task('deploy-all', function () {
    return gulp.src('./snippets/**')
    .pipe(spsave({
        siteUrl: creds.siteUrl,
        folder: '_catalogs/masterpage/Sandbox/TestGradientForm',
        flatten: false,
        checkin: true,
        checkinType: 1
    }, creds))
});

gulp.task('watch-all', function () {
    return watch('./snippets/**')
    .pipe(changed('./snippets/**'))
    .pipe(spsave({
        siteUrl: creds.siteUrl,
        folder: '_catalogs/masterpage/Sandbox/TestGradientForm',
        flatten: false,
        checkin: true,
        checkinType: 1
    }, creds))
});