var browserSync = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('browserSync', function(){
	browserSync.init({
		server:{
			baseDir: 'C:/Users/TushaR/Documents/Portfolio/frontend-nanodegree-feedreader'
		},
	})
})

gulp.task('watch',['browserSync']);