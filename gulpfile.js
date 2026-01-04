const { src, dest, watch, series, parallel } = require('gulp');

const pug = require('gulp-pug');

const dartSass = require('sass');
const gulpSass = require('gulp-sass')(dartSass);

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');

const browserSync = require('browser-sync').create();

const paths = {
  pug: {
    src: 'src/pug/templates/*.pug',
    watch: 'src/pug/**/*.pug',
    dest: 'dist/'
  },
  scss: {
    src: 'src/scss/style.scss',
    watch: 'src/scss/**/*.scss',
    dest: 'dist/css/'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  img: {
    src: 'src/img/**/*',
    dest: 'dist/img/'
  },
  fonts: {
    src: 'src/fonts/**/*',
    dest: 'dist/fonts/'
  }
};

// clean dist
function cleanDist() {
  return src('dist/', { allowEmpty: true })
    .pipe(clean());
}

// pug -> html
function compilePug() {
  return src(paths.pug.src)
    .pipe(pug({ pretty: true }))
    .pipe(dest(paths.pug.dest))
    .pipe(browserSync.stream());
}

// scss -> css
function compileScss() {
  return src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(gulpSass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// copy js
function copyJs() {
  return src(paths.js.src)
    .pipe(dest(paths.js.dest))
    .pipe(browserSync.stream());
}

// copy images
function copyImg() {
  return src(paths.img.src)
    .pipe(dest(paths.img.dest))
    .pipe(browserSync.stream());
}

// copy fonts
function copyFonts() {
  return src(paths.fonts.src)
    .pipe(dest(paths.fonts.dest))
    .pipe(browserSync.stream());
}

// dev server
function serve() {
  browserSync.init({
    server: { baseDir: 'dist/' },
    notify: false,
    open: false
  });

  watch(paths.pug.watch, compilePug);
  watch(paths.scss.watch, compileScss);
  watch(paths.js.src, copyJs);
  watch(paths.img.src, copyImg);
  watch(paths.fonts.src, copyFonts);
}

// exports
exports.build = series(
  cleanDist,
  parallel(compilePug, compileScss, copyJs, copyImg, copyFonts)
);

exports.default = series(
  cleanDist,
  parallel(compilePug, compileScss, copyJs, copyImg, copyFonts),
  serve
);
