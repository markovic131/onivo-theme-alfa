'use strict';

var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
// var sass   = require('gulp-sass');
// var watch  = require('gulp-watch');

// gulp.task('sass', function () {
//   return gulp.src('assets/scss/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('css'));
// });

gulp.task('compress', function() {
    return gulp.src([
        'assets/js/bootstrap.min.js',
        'assets/js/app.js',
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// gulp.task('watch', function () {
//     //gulp.watch('assets/scss/**/*.scss', ['sass']);
//     gulp.watch('assets/js/**/*.js', ['compress']);
// });

gulp.task('default', ['compress']);
