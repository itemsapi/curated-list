const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const shell = require('gulp-shell')
const rename = require("gulp-rename");
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const gulpSequence = require('gulp-sequence');
const htmlmin = require('gulp-htmlmin');

var js_list = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/itemsjs/dist/itemsjs.js',
  'bower_components/nunjucks/browser/nunjucks-slim.js',
  'docs/templates.js',
  'bower_components/bootstrap/dist/js/bootstrap.js',
  'bower_components/lodash/dist/lodash.min.js',
  'bower_components/history.js/scripts/bundled/html4+html5/jquery.history.js',
  'bower_components/urijs/src/URI.min.js',
  'assets/script.js',
  'bower_components/jquery-ui/jquery-ui.min.js'
];

var css_list = [
  'assets/navbar.css',
  'assets/prism.css',
  'assets/custom.css',
];

/**
 * concat all scripts
 */
gulp.task('js', ['templates.js'], () => {
  return gulp.src(js_list)
    .pipe(concat('all.js', {newLine: ';'}))
    //.pipe(minify({
      //exclude: ['tasks'],
      //ignoreFiles: ['.combo.js', '-min.js']
    //}))
    .pipe(gulp.dest('./docs/js/'));
    //.pipe(gulp.dest('./docs/'));
});


/**
 * concat all css
 */
gulp.task('css', function() {
  return gulp.src(css_list)
    //.pipe(concat('all.css', {newLine: '\n'}))
    //.pipe(concat('all.css', {newLine: "\n"}))
    //.pipe(minify({}))
    //.pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concatCss('all.css'))
    //.pipe(gulp.dest('./assets/compiled/'));
    .pipe(gulp.dest('./docs/css'));
});

/**
 * precompile nunjucks templates into template.js
 */
gulp.task('templates.js', shell.task('./script.sh'));

/**
 * generate html from nunjucks
 */
gulp.task('generate-html', () => {

  var manageEnvironment = function(environment) {
    require('./src/filters')(environment);
  }

  var config = require('./config/index').get();
  //console.log(config);

  var getData = require('./config/items')(config)
  .then((res) => {

    var itemsjs = require('itemsjs')(res, config.search);
    var result = itemsjs.search({
      per_page: 12,
      page: 1
    });

    return {
      is_ajax: false,
      all_items: JSON.stringify(res),
      website_config: JSON.stringify(config.website),
      search_config: JSON.stringify(config.search),
      items: result.data.items,
      website: config.website,
      pagination: result.pagination,
      aggregations: result.data.aggregations,
    };
  })

  return gulp.src('views/catalog.html.twig')
  .pipe(data(function(file, callback) {
    getData.then((res) => {
      return callback(null, res);
    })
  }))

  .pipe(nunjucksRender({
    path: 'views',
    manageEnv: manageEnvironment
  }))
  .pipe(rename('index.html'))
  .pipe(gulp.dest('./docs'));
});

gulp.task('build', gulpSequence(
  'templates.js',
  'css',
  'js',
  'generate-html',
  'minify-html'
));

gulp.task('minify-html', () => {
  return gulp.src('docs/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('docs'));
});
