#!/usr/bin/env node

Container = {};
var program = require('commander');

var config = require(__dirname + '/config/config.js')(function() {
  var autoload = require(__dirname + '/lib/autoload.js');

  autoload(function() {
    program
      .version('0.0.1')
      .usage('[options] <keywords>')
      .option('-i, --import [value]', 'Launch an import')
      .option('-c, --cleanAndCreate', 'Create and clean your tables')
      .parse(process.argv);

    if (program.import) {
      require(__dirname + '/task/import/index.js').process();
    } else if (program.cleanAndCreate) {
      require(__dirname + '/task/cleanAndCreate/index.js').process();
    }
  });
});
