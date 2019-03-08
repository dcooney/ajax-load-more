
// Load plugins
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sequence = require('gulp-sequence'),
    prefix = require('gulp-autoprefixer');

const appname = 'ajax-load-more';
const dist = './core/dist';
const admin_dist = './admin/dist';



/* Core ALM Tasks */


// Sass [Core Compile]
gulp.task('sass', () => {
	setTimeout(function(){
	    gulp.src('./core/src/scss/'+ appname +'.scss')
	      .pipe(sass())
	      .pipe(prefix({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']}))
	      .pipe(gulp.dest( dist +'/css/'))
			.pipe(cleanCSS())
			.pipe(rename({ suffix: '.min' }))
			.pipe(gulp.dest( dist +'/css/'))
	      .pipe(notify({ message: 'Sass Complete' }));
   }, 250);
});



/* Admin Tasks */



// JS [Lint JS]
gulp.task('admin_lint', () => {
	return gulp.src(['./admin/src/js/admin.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(notify({ message: 'Admin Lint Complete' }));
});


// JS [Concatenate JS]
gulp.task('admin_scripts', () => {
	return gulp.src([
		'./admin/src/js/libs/*.js',
		'./admin/src/js/modules/*.js',
		'./admin/src/js/admin.js',
	])
	.pipe(babel())
	.pipe(concat('admin.js'))
	.pipe(gulp.dest( admin_dist +'/js/'))
	.pipe(notify({ message: 'Admin Scripts Complete' }));
});


// Sass [Admin Compile]
gulp.task('admin_sass', () => {
	setTimeout(function(){
	   gulp.src('./admin/src/scss/admin.scss')
	      .pipe(sass())
	      .pipe(prefix({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']}))
	      .pipe(gulp.dest( admin_dist +'/css/'))
	      .pipe(notify({ message: 'Admin Sass Complete' }));
   }, 250);
});



/* Gulp Run Tasks */


// Watch
gulp.task('watch', function() {
    gulp.watch('core/src/scss/**/*.scss', ['sass']);    
    gulp.watch('admin/src/js/**/*.js', ['admin_lint', 'admin_scripts']);
    gulp.watch('admin/src/scss/**/*.scss', ['admin_sass']);
});


// Default - watches all sass and .js changes
gulp.task('default', ['sass', 'admin_sass', 'admin_lint', 'admin_scripts', 'watch']);
