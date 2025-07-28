import gulp from 'gulp';
import gulpSourcemap from 'gulp-sourcemaps';
import gulpConcat from 'gulp-concat';

export function scripts() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulpSourcemap.init())
        .pipe(gulpConcat('main.js'))
        .pipe(gulpSourcemap.write('.'))
        .pipe(gulp.dest('dist/js'));
};