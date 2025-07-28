import gulp from 'gulp';
import gulpBabel from 'gulp-babel';
import gulpConcat from 'gulp-concat';
import gulpTerser from 'gulp-terser';
import gulpSourcemap from 'gulp-sourcemaps';

export function scriptsProd() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulpSourcemap.init())
        .pipe(gulpBabel())
        .pipe(gulpConcat('main.min.js'))
        .pipe(gulpTerser())
        .pipe(gulpSourcemap.write('.'))
        .pipe(gulp.dest('dist/js'));
};