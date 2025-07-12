import gulp from 'gulp';
import eslint from 'gulp-eslint-new';

export function lint() {
    return gulp.src(['src/**/*.js', 'tasks/**/*.js', 'gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};