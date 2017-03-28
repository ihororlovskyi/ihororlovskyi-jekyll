var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('js-concat', ['sass'], function () {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/waypoints/lib/jquery.waypoints.min.js',
            '_components/**/*.js',
            '_js/global.js'
        ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('assets/js/'));
});
