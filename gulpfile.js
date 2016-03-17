var gulp = require('gulp')
var source = require('vinyl-source-stream')
var babelify = require('babelify')
var webserver = require('gulp-webserver')
var sass = require('gulp-sass')
var browserify = require('browserify')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var uglifycss = require('gulp-uglifycss')
var gutil = require('gulp-util')
var buffer = require('vinyl-buffer')
var sourcemaps = require('gulp-sourcemaps')
var clean = require('gulp-clean')

gulp.task('clean-js', function() {
    return gulp
        .src('./dist/js')
        .pipe(clean());
});

gulp.task('clean-css', function() {
    return gulp
        .src('./dist/css')
        .pipe(clean());
});

gulp.task('sass', ['clean-css'], function() {
    return gulp.src('./src/sass/**/*.*css')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('js-dev', ['clean-js'], function() {
    return browserify('./src/js/app.js')
        .transform(babelify)
        .bundle()
        .on('error', gutil.log)
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('js-prod', ['clean-js'], function() {
    return browserify('./src/js/app.js')
        .transform(babelify)
        .bundle()
        .on('error', gutil.log)
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('build-prod', ['js-prod', 'sass'])
gulp.task('build-dev', ['js-dev', 'sass'])

gulp.task('watch', ['build-dev'], function() {
    gulp.watch('./src/js/**/*.*', ['js-dev'])
    gulp.watch('./src/sass/**/*.*css', ['sass'])
})

gulp.task('webserver', ['watch'], function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: {
                enable: true,
                filter: function(name) {return !!name.match(/dist/ig)}
            },
            fallback: 'index.html',
            open: false
        }))
})