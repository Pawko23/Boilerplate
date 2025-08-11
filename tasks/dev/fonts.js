import gulp from 'gulp';

export function fonts() {
    return gulp.src('src/fonts/*.{woff2,woff,ttf,otf,eot,svg}', { encoding: false })
        .pipe(gulp.dest('dist/fonts'));
};