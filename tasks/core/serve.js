import browserSync from 'browser-sync';

const server = browserSync.create();

export function serve(done) {
    server.init({
        server: {
            baseDir: "./dist"
        },
        notify: false,
        open: false
    });
    done();
};

export { server };