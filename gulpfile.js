'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var prefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require("browser-sync");
var rigger = require('gulp-rigger');
var rimraf = require('rimraf');
var ts = require('gulp-typescript');
var rename = require("gulp-rename");

var path = {
    build: {
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        js: 'src/js/custom.js',
        style: 'src/sass/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        ts: 'src/ts/main.ts'
    },
    watch: {
        php: '*/**/*.php',
        js: 'src/js/**/*.js',
        style: 'src/sass/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        ts: 'src/ts/**/*.ts'
    },
    clean: './build'
};

var config = {
    browser: "opera",
    open: 'external',
    host: 'test_first.loc',
    proxy: 'test_first.loc',
    port: 8080
};

gulp.task('ts:build', function () {
    return gulp.src(path.src.ts)
        .pipe(sourcemaps.init())
        //.pipe(rigger())
        .pipe(ts({
            noImplicitAny: true,
            module: 'none'
        }))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        //.pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js:build', function() {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        //.pipe(rename('custom.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('style:build', function () {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('image:build', function () {
    return gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts:build', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['clean'],function (){
    gulp.start('ts:build');
    gulp.start('js:build');
    gulp.start('style:build');
    gulp.start('fonts:build');
    gulp.start('image:build');
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
    browserSync.init(config);
});


gulp.task('watch', function(){
    watch([path.watch.ts], function (event, cb) {
        gulp.start('ts:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('default', ['build'], function () {
    gulp.start('watch');
});