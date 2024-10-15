const gulp= require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

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


exports.default = gulp.parallel(compilaSass, imagens, scripts);
exports.watch = function(){
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(compilaSass,imagens));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}