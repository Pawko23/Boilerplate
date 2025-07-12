import gulp from 'gulp';
import gulpRev from 'gulp-rev';
import revRewrite from 'gulp-rev-rewrite';
import fs from 'fs';

export function revFiles() {
    return gulp.src(['dist/css/*.css', 'dist/js/*.js'], { base: 'dist' })
        .pipe(gulpRev())
        .pipe(gulp.dest('dist'))
        .pipe(gulpRev.manifest())
        .pipe(gulp.dest('dist'));
}

export function revUpdateRefs() {
    const manifest = fs.readFileSync('dist/rev-manifest.json');
    return gulp.src('dist/*.html')
        .pipe(revRewrite({
            manifest: manifest,
        }))
        .pipe(gulp.dest('dist'));
}

export const rev = gulp.series(revFiles, revUpdateRefs);