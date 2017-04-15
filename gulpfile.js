const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

gulp.task('default', () =>
gulp.src('views/basic/catalog_ajax.html.twig')
.pipe(nunjucks.precompile({}))
.pipe(gulp.dest('assets'))
);
