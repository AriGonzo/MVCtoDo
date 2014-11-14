/*gulpfile with livereload */
var gulp = require('gulp'),
    connect = require('gulp-connect');


gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
