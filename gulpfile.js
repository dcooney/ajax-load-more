
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



// JS [Lint JS]
gulp.task('lint', () => {
	return gulp.src(['./core/js/'+ appname +'.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(notify({ message: 'JSHint Complete' }));
});



// JS [Concat custom JS to app.min.js]
gulp.task('scripts', () => {
	return gulp.src([
		'./core/js/modules/*.js',
		'./core/js/'+ appname +'.js',
		'./core/js/libs/*.js',
	])
	.pipe(babel({presets: ['es2015']}))
	.pipe(concat(appname +'.js'))
	.pipe(gulp.dest( dist +'/js/'))
	.pipe(rename({ suffix: '.min' }))
	.pipe(uglify())
	.pipe(gulp.dest( dist +'/js/'))
	.pipe(notify({ message: 'Scripts Task Complete' }));
});


// Sass [Compile]
gulp.task('sass', () => {
    gulp.src('./core/scss/'+ appname +'.scss')
      .pipe(sass())
      .pipe(prefix({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']}))
      .pipe(gulp.dest( dist +'/css/'))
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest( dist +'/css/'))
      .pipe(notify({ message: 'Sass Task Complete' }));
});


gulp.task('watch', function() {
    gulp.watch('core/js/**/*.js', ['lint', 'scripts']);
    gulp.watch('core/scss/**/*.scss', ['sass']);
});



// RUN TASKS

// Default task [Watches all scss and .js changes]
gulp.task('default', ['sass', 'lint', 'scripts', 'watch']);


// Concat all JS plugin files.
gulp.task('plugins', () => {
    gulp.start('libs');
});
