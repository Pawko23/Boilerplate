import gulp from 'gulp';

export function fonts() {
    return gulp.src('src/fonts/**/*.{woff,woff2,ttf,eot}', { encoding: false })
        .pipe(gulp.dest('dist/fonts'));
}