'use strict';

var _ = require('lodash')
var nconf = require('nconf')
var yaml = require('js-yaml');
var fs   = require('fs');

nconf.use('memory');

// Get document, or throw exception on error
try {
  var config = yaml.safeLoad(fs.readFileSync(__dirname + '/../config.yaml', 'utf8'));
  //config.collection.catalog = config.collection.catalog || {};

  nconf.defaults(config);
} catch (e) {
  console.log(e);
}

exports.get = function() {
  return nconf.get();
}

module.exports = exports;
