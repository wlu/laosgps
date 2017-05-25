var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serveprod', function(){
	connect.server({
    root: ['build'],
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
	});
});	