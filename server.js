var express = require('express')
var app = express()

var itemsjs;

const request = require('request');
var PORT = process.env.PORT || 3000;

/*const data_url = process.env.DATA_URL || 'https://raw.githubusercontent.com/itemsapi/itemsapi-example-data/master/items/movies-processed.json';
console.log('Importing JSON data..');
request(data_url, {json: true}, (err, res) => {
  console.log('Imported data.');
  //itemsjs = require('itemsjs')(res.body);
  itemsjs = require('./../itemsjs')(res.body);
})*/

//const data_url = ;
itemsjs = require('./../itemsjs')(require('./imdb.json'));

var bodyParser = require('body-parser');
var nunenv = require('./src/nunenv')(app, 'views', {
  autoescape: true,
  watch: true,
  noCache: true
})

app.use('/bootstrap', express.static('node_modules/bootstrap'));
app.use('/assets', express.static('assets'));
app.use('/libs', express.static('bower_components'));

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));

app.set('view engine', 'html.twig');
app.set('view cache', false);

app.engine('html.twig', nunenv.render);

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
  if (req.is_installation) {
    //return next()
    return res.redirect('/installation')
  } else {

    var page = parseInt(req.query.page, 10);
    var is_ajax = req.query.is_ajax || req.xhr;

    var sort = 'visits'

    //var filters = JSON.parse(req.query.filters || JSON.stringify({tags: ['dramat']}));
    var filters = {
      tags: []
    };

    console.log(req.query);
    if (req.query.filters) {
      filters = JSON.parse(req.query.filters);
    }

    var query = {
      sort: sort,
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
    //console.log(JSON.stringify(result, null, 2));

    return res.render('basic/catalog', {
      items: result.data.items,
      pagination: result.pagination,
      query: req.query.query,
      page: page,
      sort: sort,
      is_ajax: is_ajax,
      url: req.url,
      aggregations: result.data.aggregations,
      filters: filters,
    });
  }
})

app.listen(PORT, function () {
  console.log('Example app listening on port %s!', PORT);
})

