var express = require('express')
var app = express()

var itemsjs;

const request = require('request');
var PORT = process.env.PORT || 3000;
var config = require('./config/index').get();

//console.log(config);
var itemsjs = require('itemsjs');

if (config.data.type === 'file') {
  itemsjs = itemsjs(require(config.data.path), config.search);
} else if (config.data.type === 'url') {
  request(config.data.url, {json: true}, (err, res) => {
    itemsjs = itemsjs(res.body, config.search);
  })
} else if (config.data.values) {
  itemsjs = itemsjs(config.data.values, config.search);
}

var bodyParser = require('body-parser');
var nunenv = require('./src/nunenv')(app, 'views', {
  autoescape: true,
  watch: true,
  noCache: true
})

app.use('/bootstrap', express.static('node_modules/bootstrap'));
app.use('/assets', express.static('assets'));
app.use('/libs', express.static('bower_components'));
app.use('/views', express.static('views'));

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));

app.set('view engine', 'html.twig');
app.set('view cache', false);
app.engine('html.twig', nunenv.render);


/**
 * middleware
 */
app.get('/*', function(req, res, next) {
  // passing website config to template
  res.locals.website = config.website;
  next();
});

/**
 * restful search
 */
app.get('/search', function (req, res) {
  let filters = req.query.filters ? JSON.parse(req.query.filters) : undefined;

  var result = itemsjs.search({
    per_page: req.query.per_page || 10,
    page: req.query.page || 1,
    filters: filters
  });
  res.json(result);
})

app.get(['/', '/catalog'], function(req, res) {

  var page = parseInt(req.query.page, 10);
  var is_ajax = req.query.is_ajax || req.xhr;

  var filters = {};

  if (req.query.filters) {
    filters = JSON.parse(req.query.filters);
  }

  var query = {
    query: req.query.query,
    page: page,
    aggs: req.query.filters,
    per_page: 16
  }

  var result = itemsjs.search({
    per_page: req.query.per_page || 12,
    page: req.query.page || 1,
    query: req.query.query,
    filters: filters
  });

  //res.locals.all_items = JSON.stringify(config.data.values);
  //res.locals.all_items = (config.data.values);
  //res.locals.search_config = JSON.stringify(config.search);

  return res.render('catalog', {
    items: result.data.items,
    pagination: result.pagination,
    all_items: JSON.stringify(config.data.values),
    website_config: JSON.stringify(config.website),
    search_config: JSON.stringify(config.search),
    query: req.query.query,
    page: page,
    is_ajax: is_ajax,
    url: req.url,
    aggregations: result.data.aggregations,
    filters: filters,
  });
})

app.listen(PORT, function () {
  console.log('Your app listening on port %s!', PORT);
});
