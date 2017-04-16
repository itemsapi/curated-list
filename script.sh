mkdir -p docs/js
./node_modules/nunjucks/bin/precompile views/catalog.html.twig > docs/js/templates.js 
./node_modules/nunjucks/bin/precompile views/aggregations.html.twig >> docs/js/templates.js
./node_modules/nunjucks/bin/precompile views/pagination.html.twig >> docs/js/templates.js
./node_modules/nunjucks/bin/precompile views/breadcrumbs.html.twig >> docs/js/templates.js
