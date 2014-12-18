var parentSchema = require('./schema.js');
var cleanAndCreate = require('../cleanAndCreate/index.js');
var async = require('async');
var array = [];

Object.keys(parentSchema).forEach(function(key){
  array.push(key);
});

var index = {
  process: function() {
    cleanAndCreate.process(function(){
      var excelParser = require('excel-parser');
      var workbook = __dirname + '/../../test2.xls';

      excelParser.parse({
        inFile: workbook,
        worksheet: 1,
        skipEmpty: false
      }, function(err, articles) {
        if (err) {
          console.log(err);
        } else {
          var i = 0;

          var q = async.queue(function(articleObject, callback){

            var article = articleObject.article;

            var q2 = async.queue(function(keyObject, callback2){
              var key = keyObject.key;
              var schema = parentSchema[key];
              var schemaFields = schema.fields;
              var object = {};
              for(schemaKey in schemaFields) {
                  var value = schemaFields[schemaKey].fieldName
                  object[value] = article[schemaFields[schemaKey].index];
              }
              var buildObject = schema.model.build(object);


              buildObject.save().then(function(){

                var q3 = async.queue(function(associatedQueue, callback){
                    var associated = associatedQueue.associated;
                    var object = {};
                    object[associated.fieldName] = article[associated.index];
                    associated.model.find({where: object}).then(function(associatedObject){
                      if(associatedObject !== null) {
                        associatedObject[associated.associatedFunction](buildObject);
                        associatedObject.save().then(callback);
                      }
                    });
                }, 1);

                q3.drain = function(){
                  callback2();
                };
                // Associated
                if(schema.associated !== undefined) {
                  schema.associated.forEach(function(associated){
                    q3.push({associated: associated}, function(){});
                  });
                } else {
                  callback2();
                }
              }).catch(function(e){
                  callback2();
              });

            }, 1);

            q2.drain = function(){
              callback();
            };

            array.forEach(function(key){
              q2.push({key: key}, function(){});
            });

          }, 1); 

          q.drain = function() {}

          articles.forEach(function(article) {
            if(i !== 0) {
              q.push({article: article}, function(){});
            }
            i++;
          });
        }
      });
    });
  }
};

module.exports = index;
