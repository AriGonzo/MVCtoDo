/*gulpfile with livereload */
var gulp = require('gulp'),
    connect = require('gulp-connect');
    wiredep = require('wiredep');

gulp.task('wiredep', function(){
  wiredep({src: 'index.html' });
});

gulp.task('bower', function(){
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch', 'bower']);
