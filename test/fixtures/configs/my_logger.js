(function () {
    'use strict';

    var fs = require('fs'),
        util = require('util');

    var MyLogger = function (config) {
      this.stop = function () {

      };

      this.log = function(msg) {
        fs.writeFile('/tmp/my_hipache_logger.log', JSON.stringify(msg));
      };
    };

    module.exports = MyLogger;

})();
