'use strict';
var _ = require('lodash');
var urijs = require('urijs');

exports.build = function(str, data) {
  var url = new urijs(str || '');
  var search = url.search(true);
  url.search(_.extend(search, data));
  return url.normalizeQuery().toString();
}
