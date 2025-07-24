import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import gulpSourcemap from 'gulp-sourcemaps';
import GulpPostCss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import { server } from './serve.js';

const sass = gulpSass(dartSass);

export function styles() {
    return gulp.src("src/scss/main.scss")
        .pipe(gulpSourcemap.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(GulpPostCss([autoprefixer()]))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulpSourcemap.write("."))
        .pipe(gulp.dest("dist/css"))
        .pipe(server.stream());
};