import gulp from 'gulp';
import { html } from './html.js';
import { styles } from './styles.js';
import { server } from "./serve.js";

export function reload(done) {
    server.reload();
    done();
};

export function watchFiles() {
    gulp.watch("src/*.html", gulp.series(html, reload));
    gulp.watch("scss/**/*.scss", gulp.series(styles));
};