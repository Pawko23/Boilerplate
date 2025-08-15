export const config = {
    glob: {
        scss: './src/scss/**/*.scss',
        js: './src/js/**/*.js',
        html: './src/*.html',
        lint: ['src/**/*.js', 'tasks/**/*.js', 'gulpfile.js'],
    },
    entryPoint: {
        scss: './src/scss/main.scss',
    },
    path: {
        src: './src/',
        dist: './dist/',
        css: './dist/css',
        js: './dist/js',
        scss: './src/scss',
        jsSource: './src/js/',
    },
    dev: {
        css: {
            outputName: 'main.min.css',
            sourcemaps: true,
            cleanCSS: {
                level: 2,
            },
        },
        js: {
            outputName: null,
            sourcemaps: false,
            uglify: false,
        },
        server: {
            baseDir: './dist',
            notify: false,
            open: false,
        },
    },
    prod: {
        css: {
            outputName: 'main.min.css',
            sourcemaps: true,
            cleanCSS: {
                level: 2,
            },
            concatOrder: [
                './src/scss/**/*.scss',
            ],
        },
        js: {
            outputName: 'main.min.js',
            sourcemaps: true,
            uglify: true,
            concatOrder: [
                './src/js/**/*.js',
                // Tutaj idzie konkretna kolejność jeśli będę potrzebował
            ],
        },
        rev: {
            files: ['dist/css/*.css', 'dist/js/*.js'],
            base: 'dist',
            manifest: 'dist/rev-manifest.json',
            htmlFiles: 'dist/*.html',
        },
    },
};

export default config;