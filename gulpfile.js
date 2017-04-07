var gulp = require('gulp');

var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

gulp.task('script',function(){
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js-1'))
})
gulp.task('concat',function(){
    gulp.src(['js/1.js','js/2.js'])
        .pipe(concat('3.js'))
        .pipe(gulp.dest('js-1'));
})
gulp.task('watch',function(){
    gulp.watch(['./js/1.js','./js/2.js'],['concat'])
})
