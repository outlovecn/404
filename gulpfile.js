const { src, dest, parallel, series } = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const htmlmin = require('gulp-html-minifier2')
const cssmin = require('gulp-cssmin')
const inlinesource = require('gulp-inline-source')
const obfuscate = require('gulp-obfuscate')
const del = require('del')
function js () {
  return src('js/*.js')
    .pipe(uglify())
    // .pipe(obfuscate())
    .pipe(dest('dist/js'))
}
function html () {
  return src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('dist'))
}
function css () {
  return src('css/*.css')
    .pipe(cssmin())
    .pipe(dest('dist/css'))
}
function clean (cb) {
  del.sync(['dist/**', '!dist/404.html'])
  cb()
}
function inline () {
  return src('dist/index.html')
    .pipe(inlinesource())
    .pipe(rename("404.html"))
    .pipe(dest('dist'))
}
exports = Object.assign(exports, {
  js,
  html,
  css,
  clean
})
exports.default = series(parallel(html, js, css), inline, clean)