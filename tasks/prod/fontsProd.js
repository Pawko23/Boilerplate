import gulp from 'gulp';

export function fontsProd() {
    return gulp.src('src/fonts/**/*.{woff,woff2,ttf,eot}', { encoding: false })
        .pipe(gulp.dest('dist/fonts'));
}