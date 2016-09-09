var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulpHandlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var handlebars = require('handlebars');
var del = require('del');

//paths
var templatesSource = 'src/**/*.hbs',
  scriptsSource = 'src/**/*.js',
  cssSource = 'src/**/*.css',
  handlebarsRuntimeSrc = './node_modules/handlebars/dist/handlebars.runtime.min.js',  
  distPath = 'dist',
  outputFileSuffix = 'imaginea-oss-widget';

gulp.task('templates', function () {
  return gulp.src(templatesSource)
    .pipe(gulpHandlebars({ handlebars: handlebars }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
        namespace: 'Imaginea.OSS.Templates',
        noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(distPath));
});

gulp.task('scripts', function () {
  return gulp.src([handlebarsRuntimeSrc, distPath + '/templates.js', scriptsSource])
    .pipe(concat(outputFileSuffix + '.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(distPath));
});

gulp.task('css', function () {
  return gulp.src(cssSource)
    .pipe(rename(outputFileSuffix + '.css'))
    .pipe(gulp.dest(distPath));
});

gulp.task('clean', function () {
  return del('dist/**/*.*');
});

gulp.task('build', gulp.series('clean', 'css', 'templates', 'scripts'));

gulp.task('watch', gulp.series('build', function watchSources() {
  return gulp.watch([templatesSource, scriptsSource, cssSource], gulp.series('build')).on('change', function (event) {
    console.log('Change detected: ' + event + ' was modified, running tasks...');
  }).on('error', function (error) {
    console.log(error); 
  });  
}));