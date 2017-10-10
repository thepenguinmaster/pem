'use strict'

// var openssl = require('./openssl.js')
// var helper = require('./helper.js')

/**
 * pem ca module
 *
 * @module ca
 */

/**
* create a signed certificate for a client/website
* @param  {Object} options  an object of config settings
* @param  {String} options.hash Hash Algorithm for the certificate default sha256
* @param  {String} options.days days of validity
* @param  {String} options.startdate YYMMDDHHMMSSZ certificate validity notBefore
* @param  {String} options.enddate YYMMDDHHMMSSZ certificate validity notAfter (overrides options.days)
* @param  {String} options.policy The CA 'policy' to support
* @param  {Function} callback callback method called with error, boolean result
*/
module.exports = function (options, pathOUT, type, callback) {
  // TODO
}
