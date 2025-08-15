import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import merge from 'merge-stream';

export function cssSprite () {
    const spriteData = gulp.src('src/images/icons/*.png', { encoding: false }).pipe(spritesmith({
        imgName: 'sprite-shrek.png',
        cssName: '_shrek.scss',
        imgPath: '../images/sprite-shrek.png',
        cssFormat: 'scss',
        cssVarMap: function(sprite) {
            sprite.name = 'icon-' + sprite.name;
        },
        padding: 10,
    }));

    const imgStream = spriteData.img
        .pipe(gulp.dest('dist/images'));

    const cssStream = spriteData.css
        .pipe(gulp.dest('src/scss/generated/sprites'));
    
    return merge(imgStream, cssStream);
}