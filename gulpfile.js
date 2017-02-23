var gulp = require('gulp');
var postcss = require('gulp-postcss');
var connect = require('gulp-connect');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('connect', function () {
    connect.server({
        //root: '.',
        //root: '../iframe',
        port: '9001',
        livereload: true
    });
});

gulp.task('css', function () {
    var processors = [
        autoprefixer,
        cssnext,
        precss
    ];
    return gulp.src('./css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css/dest'));
});

gulp.task('watch', function () {
    // gulp.watch(['./*.html'], ['html']);
    gulp.watch(['./css/*.css'], ['css']);
});

gulp.task('default', ['connect', 'watch']);

