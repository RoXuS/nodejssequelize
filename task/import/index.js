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
              console.log('/////////////////////////');
              var key = keyObject.key;
              var schema = parentSchema[key];
              var schemaFields = schema.fields;
              var object = {};
              for(schemaKey in schemaFields) {
                  var value = schemaFields[schemaKey].fieldName
                  object[value] = article[schemaFields[schemaKey].index];
              }
              console.log(object);
              var buildObject = schema.model.build(object);
              // Associated
              if(schema.associated !== undefined) {
                schema.associated.forEach(function(associated){
                  var object = {};
                  object[associated.fieldName] = article[associated.index];
                  console.log('assoc field')
                  console.log(object);
                  associated.model.find({where: object}).then(function(associatedObject){
                    if(associatedObject !== null) {
                      console.log('there is an assoc')
                      associatedObject[associated.associatedFunction](buildObject);
                    }
                  });
                });
              }

              buildObject.save().then(function(){
                setTimeout(function(){
                callback2();
                }, 100);
              }).catch(function(e){
                console.log('blabla')
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

          q.drain = function() {
            console.log('toto');
          }

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
