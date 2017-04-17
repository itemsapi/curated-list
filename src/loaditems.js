'use strict';

var _ = require('lodash')
const request = require('request');
const Promise = require('bluebird');

/**
 * returns configuration with data
 */
module.exports = function(config) {

  return new Promise(function (resolve, reject) {
    if (config.data.type === 'file') {
      return resolve(require(__dirname + '/../' + config.data.path));
    } else if (config.data.type === 'url') {
      request(config.data.url, {json: true}, (err, res) => {
        return resolve(res.body);
      })
    } else if (config.data.values) {
      return resolve(config.data.values);
    }
  });
}
