const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

function sendhtml() {
    return src('src/*.html')
        .pipe(dest('dist/'))
}

function compilesass() {
    return src('src/sass/*.scss')
        .pipe(sass())
        .pipe(prefix('last 5 versions'))
        .pipe(minify())
        .pipe(dest('dist/css'));
}

function jsmin() {
    return src('src/js/*.js')
        .pipe(terser())
        .pipe(dest('dist/js'));
}

function sendAssets() {
    return src('src/images/**/*')
        .pipe(dest('dist/images/'));
}

function watchTask() {
    watch('src/*.html', series(sendhtml, browsersyncReload));
    watch('src/sass/**/*.scss', series(compilesass, browsersyncReload));
    watch('src/js/*.js', series(jsmin, browsersyncReload));
    watch('src/images/**/*.png', series(sendAssets, browsersyncReload));
}

function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    });

    cb();
}

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

exports.default = series(
    sendhtml,
    compilesass,
    jsmin,
    sendAssets,
    browsersyncServe,
    watchTask
);