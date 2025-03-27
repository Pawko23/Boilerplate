import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'autoprefixer';
import GulpPostCss from 'gulp-postcss';
import { deleteAsync } from 'del';
import browserSync from 'browser-sync';
import gulpSourcemap from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(dartSass);
const server = browserSync.create();

export function clean() {
    return deleteAsync(["dist"]);
}

export function styles() {
    return gulp.src("scss/main.scss")
        .pipe(gulpSourcemap.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(GulpPostCss([autoprefixer()]))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulpSourcemap.write("."))
        .pipe(gulp.dest("dist/css"))
        .pipe(server.stream());
}

export function html() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist/"));
}

export function reload(done) {
    server.reload();
    done();
}

export function watchFiles() {
    gulp.watch("src/*.html", gulp.series(html, reload));
    gulp.watch("scss/**/*.scss", gulp.series(styles));
}

export function serve(done) {
    server.init({
        server: {
            baseDir: "./dist"
        },
        notify: false,
        open: false
    });
    done();
}

export default gulp.series(clean, html, styles, serve, watchFiles);