import gulp from 'gulp';
import { clean } from './tasks/core/clean.js';
import { html } from './tasks/core/html.js';
import { styles } from './tasks/core/styles.js';
import { serve } from './tasks/core/serve.js';
import { watchFiles } from './tasks/core/watch.js';
import { scripts } from './tasks/core/scripts.js';
import { lint } from './tasks/lint/eslint.js';

export default gulp.series(
    lint,
    clean, 
    html,
    scripts, 
    styles, 
    serve, 
    watchFiles,
);