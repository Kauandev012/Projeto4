const gulp= require('gulp');
const sass = require('gulp-sass')(require('sass'));


function compilaSass() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
}

exports.default = compilaSass;
exports.watch = function(){
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(compilaSass))
}