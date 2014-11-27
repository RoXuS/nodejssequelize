var parentSchema = require('./schema.js');
var async = require('async');
var array = [];

Object.keys(parentSchema).forEach(function(key){
  array.push(key);
});

var index = {
  process: function() {
    var excelParser = require('excel-parser');
    var workbook = __dirname + '/../../test.xls';

    excelParser.parse({
      inFile: workbook,
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
             async.eachSeries(array, function(key, callback){
                var schema = parentSchema[key];
                var schemaFields = schema.fields;
                var object = {};
                Object.keys(schemaFields).forEach(function(schemaFieldsKey){
                  var value = schemaFields[schemaFieldsKey];
                  var key = schemaFieldsKey;
                  object[value] = article[key];
                });
                var buildObject = schema.model.build(object);
                // Associated
                if(schema.associated !== undefined) {
                  var object = {};
                  object[schema.associated.fieldName] = article[schema.associated.index];
                  schema.associated.model.find(object).then(function(associatedObject){
                    associatedObject[schema.associated.associatedFunction](buildObject);
                  });
                }
                buildObject.save().then(function(){
                  return callback();
                }).catch(function(e){
                  return callback();
                  console.log(e);
                });
             }); 
          }
          i++;
        });
      }
    });
  }
};

module.exports = index;
