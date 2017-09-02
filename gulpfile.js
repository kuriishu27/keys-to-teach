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

// gulp.task('styles', function() {
//   gulp.src('css/*.css')
//     .pipe(concat('spectre.css'))
//     .pipe(cssmin())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./public/dist/css'));
// });

gulp.task('automate', function () {
  gulp.watch('./css/*.css', ['styles']);
  gulp.watch('./js/*.js', ['scripts']);
});

// gulp.task('browser-sync', ['styles'], function () {
//   var files = [
//     'views/*.ejs',
//     'dist/css/**/*.css',
//     'dist/img/**/*.png',
//     'dist/js/**/*.js',
//     'css/*.css'
//   ];

//   browserSync.init(files, {
//     server: {
//       baseDir: './',
//       proxy: "http://localhost:8080",
//       ui: {
//         port: 8080
//       }
//     }
//   });
//   gulp.watch('./scss/*.scss', ['styles']);
//   gulp.watch(["*.html", './css/*.css']).on("change", reload);
// });

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
  gulp.watch('./public/stylesheets/scss/*.scss', ['styles']);
  gulp.watch(["./views/**/*.ejs", './scss/*.scss']).on('change', reload);  
  // gulp.watch(["*.ejs", './css/*.css']).on("change", reload);
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