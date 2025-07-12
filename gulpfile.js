import gulp from 'gulp';
import { clean } from './tasks/core/clean.js';
import { html } from './tasks/core/html.js';
import { styles } from './tasks/core/styles.js';
import { serve } from './tasks/core/serve.js';
import { watchFiles } from './tasks/core/watch.js';

export default gulp.series(
    clean, 
    html, 
    styles, 
    serve, 
    watchFiles
);