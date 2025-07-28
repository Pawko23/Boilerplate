import gulp from 'gulp';
import htmlReplace from 'gulp-html-replace';

export function htmlProd() {
    return gulp.src("src/*.html")
        .pipe(htmlReplace({
            'js': 'js/main.min.js',
        }))
        .pipe(gulp.dest('dist/'));
};