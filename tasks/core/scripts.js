import gulp from 'gulp';

export function scripts() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
};