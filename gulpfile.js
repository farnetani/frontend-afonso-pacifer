var gulp = require('gulp')
var exec = require('gulp-exec');
var stylus = require('gulp-stylus')


gulp.task('stylus', function() {
  gulp.src('styles.styl')
  .pipe(stylus())
  .pipe(gulp.dest('public/css'))
})

gulp.task('stylus', function() {
  gulp.src('styles.styl')
  .pipe(stylus({
    compress: true
  }))
  .pipe(gulp.dest('public/css'))
})

gulp.task('go', function() {
  console.log('Go task');
})

gulp.task('afonso', function() {
  console.log('xxxx');
})

gulp.task('tudo', ['go', 'afonso'])

gulp.task('css', function() {
  var options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false, // default = false, true means stdout is written to file.contents
    customTemplatingThing: "test" // content passed to gutil.template()
  };
  var reportOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
  }
  return gulp.src('./styles.styl')
    .pipe(exec('stylus styles.styl ', options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('cssw', function() {
  var options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false, // default = false, true means stdout is written to file.contents
    customTemplatingThing: "test" // content passed to gutil.template()
  };
  var reportOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
  }
  return gulp.src('./styles.styl')
    .pipe(exec('stylus styles.styl -w', options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('pug', function(){

  var reportOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
  }

  return gulp.src('index.pug')
  .pipe(exec('pug index.pug index.html'))
  .pipe(exec.reporter(reportOptions));
})

gulp.task('default', ['css', 'pug'])
