import gulp from 'gulp';
import gulpConcat from 'gulp-concat';
import gulpUglify from 'gulp-uglify';
import gulpSourcemap from 'gulp-sourcemaps';

export function scriptsProd() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulpSourcemap.init())
        .pipe(gulpConcat('main.min.js'))
        .pipe(gulpUglify())
        .pipe(gulpSourcemap.write('.'))
        .pipe(gulp.dest('dist/js'));
};