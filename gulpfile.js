import gulp from 'gulp';
import { clean } from './tasks/dev/clean.js';
import { html } from './tasks/dev/html.js';
import { scripts } from './tasks/dev/scripts.js';
import { scriptsProd } from './tasks/prod/scriptsProd.js';
import { styles } from './tasks/dev/styles.js';
import { stylesProd } from './tasks/prod/stylesProd.js';
import { serve } from './tasks/dev/serve.js';
import { watchFiles } from './tasks/dev/watch.js';
import { lint } from './tasks/lint/eslint.js';
import { rev } from './tasks/prod/rev.js';

export const dev = gulp.series(
    lint,
    clean,
    gulp.parallel(html, styles, scripts),
    serve,
    watchFiles,
);

export const build = gulp.series(
    lint,
    clean,
    gulp.parallel(html, stylesProd, scriptsProd),
    rev,
);