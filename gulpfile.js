var gulp = require('gulp');
var del = require('del');
var mainBowerFiles = require('main-bower-files');

var paths = {
    lib: 'www/lib'
};

gulp.task('bower', function () {
    del.sync(paths.lib);
    gulp.src(mainBowerFiles(), {base: 'bower_components'})
        .pipe(gulp.dest(paths.lib));
});

gulp.task('default', function () {

});