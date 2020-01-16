var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var concat = require('gulp-concat')
var babel = require('gulp-babel')
var uglify = require('gulp-uglify')
var minify = require('gulp-minify')

gulp.task('pug', function () {
    return gulp.src("./src/**/*.pug")
        .pipe(pug())
        .pipe(gulp.dest('./dist/'))
})
gulp.task('sass', function () {
    return gulp.src("./src/scss/**/**/*.[sc]ss")
        .pipe(sass())
        .pipe(concat('style-project.css'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/css/'))
})
gulp.task('js', function () {
    return gulp.src("./src/js/**/*.js")
        .pipe(babel())
        .pipe(concat('main-project.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
})

gulp.task('watch', function () {
    gulp.watch('./src/**/*.pug', ['pug'])
    gulp.watch('./src/scss/**/*.scss', ['sass'])
    gulp.watch('./src/js/**/*.js', ['js'])
});

gulp.task('default', ['pug', 'sass', 'js','watch'])