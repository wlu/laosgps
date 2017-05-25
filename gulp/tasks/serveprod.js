var gulp = require('gulp');

gulp.task('serveprod', function() {
  connect.server({
    root: laosgps,
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});