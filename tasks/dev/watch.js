import gulp from 'gulp';
import { html } from './html.js';
import { styles } from './styles.js';
import { scripts } from './scripts.js';
import { server } from "./serve.js";

export function reload(done) {
    server.reload();
    done();
};

export function watchFiles() {
    gulp.watch("src/*.html", gulp.series(html, reload));
    gulp.watch("src/scss/**/*.scss", gulp.series(styles));
    gulp.watch("src/*.js", gulp.series(scripts));
};