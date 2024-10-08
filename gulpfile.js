const gulp= require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function compilaSass() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
}

function imagens() {
        return gulp.src('./src/imagens/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imagens'));
}


exports.default = gulp.parallel(compilaSass, imagens);
exports.watch = function(){
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(compilaSass,imagens));
}