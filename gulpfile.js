var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var del = require('del');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var templateCache = require('gulp-angular-templatecache');
var open = require('gulp-open');
var less = require('gulp-less');
var merge = require('merge-stream');

gulp.task('connect', function() {
  connect.server({
    root: [__dirname],
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./demo/**/*.html'], ['html']);
  gulp.watch(['./**/*.less'], ['styles']);
  gulp.watch(['./src/**/*.js','./demo/**/*.js', './**/*.html'], ['scripts']);
});

gulp.task('clean', function(cb) {
  del(['dist/**/*'], cb);
});

gulp.task('styles', function() {
  gulp.src('src/**/*.less')
      .pipe(less())
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist'))
      .pipe(minifyCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload());
});

gulp.task('scripts', function() {

  function getTemplates(){
    return gulp.src('src/**/*.html')
      .pipe(minifyHtml({
             empty: true,
             spare: true,
             quotes: true
            }))
      .pipe(templateCache());
  };

  function getJs(){
    return gulp.src('src/**/*.js');
  };

  merge(getJs(), getTemplates())
    .pipe(concat('directive.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('open', function(){
  gulp.src('./demo/demo.html')
  .pipe(open('', {url: 'http://localhost:8080/demo/demo.html'}));
});

gulp.task('build', ['clean', 'scripts', 'styles']);
gulp.task('serve', ['build', 'connect', 'watch', 'open']);
