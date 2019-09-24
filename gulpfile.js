const { src, dest, parallel } = require('gulp')
const uglify = require('gulp-uglify')
// const rename = require('gulp-rename')
const htmlmin = require('gulp-html-minifier2')
const cssmin = require('gulp-cssmin')
function js () {
  return src('js/*.js')
    .pipe(uglify())
    // .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'))
}
function html () {
  return src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('dist'))
}
function css () {
  return src('css/*.css')
    .pipe(cssmin())
    .pipe(dest('dist/css'))
}
exports = Object.assign(exports, {
  js,
  html,
  css
})
exports.default = parallel(html, js, css)