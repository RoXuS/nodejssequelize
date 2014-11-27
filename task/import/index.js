var schema = require('./schema.js');

var index = {
  process: function() {
    var excelParser = require('excel-parser');
    var workbook = __dirname + '/../../test.xls';

    excelParser.parse({
      inFile: 'test.xls',
      worksheet: 1,
      skipEmpty: false
    }, function(err, articles) {
      if (err) {
        console.log(err);
      } else {
        //console.log(articles);
        var i = 0;
        articles.forEach(function(article) {
          if (i !== 0) {
            var object = {};
            object[schema[3].field] = article[3];
            var model = schema[3].model;
            var test = Container.model.marque.create({'toto':'toto'}).then(function(test, er) {
              console.log(test);
            }).catch(function(e) {
              console.log(e);
            }).error(function(e){console.log(e);});
            console.log(article[3]);

          }
          i++;
        });
      }
      process.exit();
    });
  }
};

module.exports = index;
