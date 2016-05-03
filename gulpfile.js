var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    cp = require('child_process'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', ['jsMin'], function (done) {
    browserSync.notify(messages.jekyllBuild);
    var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
    return cp.spawn(jekyll, ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function () {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src([
            '_scss/main.scss'
        ])
        .pipe(sass({
            includePaths: ['scss'],
            outputStyle: 'compressed',
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest('assets/css'));
});

/* Js */
gulp.task('jsConcat', ['sass'], function () {
    return gulp.src([
            'assets/js/lib/*',
            'assets/js/vendor/*',
            'assets/js/common/*'
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('jsMin', ['jsConcat'], function () {
    return gulp.src('assets/js/all.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('_scss/**/*', ['sass']);
    gulp.watch([
        '_layouts/**/*.html',
        '_includes/**/*',
        '_posts/**/*',
        '_data/*',
        'assets/img/**/**/**/**/*.*',
        'assets/fonts/*',
        'assets/js/**/*',
        '_config.yml',
        '_config_dev.yml'
    ], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['watch']);
