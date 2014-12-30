var gulp = require('gulp'),
  del = require('del'),
  less = require('gulp-less'),
  runSequence = require('run-sequence'),
  rename = require("gulp-rename"),
  nodemon = require('gulp-nodemon'),
  _ = require('lodash'),
  browserify = require('browserify'),
  reactify = require('reactify'),
  watchify = require('watchify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  sort = require('sort-stream'),
  notify = require('gulp-notify'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  pkg = require('./package.json'),
  to5ify = require("6to5ify");

var files = {
  index: './src/index.html',
  js: './src/index.js',
  less: 'src/less/**/*.less',
  bundle: 'app.js',
  buildJS: 'build/js',
  buildCss: 'build/css'
};

gulp.task('clean', function (cb) {
  del(['build'], {force: true}, cb);
});

gulp.task('copy-index', function () {
  return gulp.src(files.index)
    .pipe(gulp.dest('./build'))
    .pipe(reload({stream: true}));
});

gulp.task('browserify', function () {
  browserify(files.js)
    .transform(to5ify)
    .transform(reactify)
    .bundle()
    .pipe(source(files.bundle))
    .pipe(buffer())
    .pipe(gulp.dest(files.buildJS));
});

gulp.task('watchify', function () {
  var bundler = watchify(browserify([files.js], watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(files.bundle))
      .pipe(gulp.dest(files.buildJS))
      .pipe(reload({stream: true}));
  }

  bundler
    .transform(to5ify)
    .transform(reactify)
    .on('update', rebundle);
  return rebundle();
});

gulp.task('less', function () {
  return gulp.src('./src/less/main.less')
    .pipe(less({
      compile: true,
      compress: false,
      noUnderscores: false,
      noIDs: false,
      zeroUnits: false
    }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream: true}));
});

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: './build'
    }
  })
});

gulp.task('watchTask', function () {
  gulp.watch(files.less, ['less']);
  gulp.watch(files.index, ['copy-index']);
});

gulp.task('watch', ['clean'], function () {
  gulp.start(['copy-index', 'browserSync', 'watchTask', 'watchify', 'less']);
});

gulp.task('default', ['clean', 'copy-index', 'browserify']);