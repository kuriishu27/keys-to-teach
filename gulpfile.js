var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var ejs = require("gulp-ejs");
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var reload = browserSync.reload;
const imagemin = require('gulp-imagemin');

gulp.task('img-min', () =>
	gulp.src('public/img/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
		.pipe(gulp.dest('public/dist/img'))
);

gulp.task('scripts', function () {
  gulp.src('js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/js'))
});

gulp.task('styles', function () {
  gulp.src('./public/stylesheets/scss/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/dist/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('automate', function () {
  gulp.watch('./css/*.css', ['styles']);
  gulp.watch('./js/*.js', ['scripts']);
});

gulp.task('ejs', function(){
  return gulp.src('views/**/*.ejs')
   .pipe(ejs({}, {ext:'.html'}))
   .pipe(gulp.dest('dist/html/'));
});

gulp.task('browser-sync', ['nodemon'], function () {

  var files = [
    'views/*.ejs',
    'dist/css/**/*.css',
    'dist/img/**/*.png',
    'dist/js/**/*.js',
    'css/*.css'
  ];
  browserSync.init(null, {
    proxy: "http://localhost:8080",
    port: 8081,
  });
  gulp.watch('public/stylesheets/scss/*.scss', ['styles']);
  gulp.watch(["./views/**/*.ejs", 'public/stylesheets/scss/*.scss']).on('change', reload);  
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});


gulp.task('default', ['browser-sync']);