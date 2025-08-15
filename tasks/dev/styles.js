import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import gulpSourcemap from 'gulp-sourcemaps';
import GulpPostCss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import gulpConcat from 'gulp-concat';
import { server } from './serve.js';
import { config } from '../config.js';

const sass = gulpSass(dartSass);

export function styles() {
    return gulp.src(config.entryPoint.scss)
        .pipe(gulpSourcemap.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(GulpPostCss([autoprefixer()]))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulpConcat(config.dev.css.outputName))
        .pipe(gulpSourcemap.write("."))
        .pipe(gulp.dest(config.path.css))
        .pipe(server.stream());
};