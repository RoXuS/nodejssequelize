var schema = require('./schema.js');

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

            // Marque
            var marqueSchema = schema['Marque'];
            var marqueSchemaFields = marqueSchema.fields;
            var object = {};
            Object.keys(marqueSchemaFields).forEach(function(marqueSchemaFieldsKey){
              var value = marqueSchemaFields[marqueSchemaFieldsKey];
              var key = marqueSchemaFieldsKey;
              object[value] = article[key];
            });
            var marque = schema['Marque'].model.build(object);
            marque.save(object).then(function(test, er) {
            }).catch(function(e){
              console.log(e);
            });
            // Marque

            // Modele
            var modeleSchema = schema['Modele'];
            var modeleSchemaFields = modeleSchema.fields;
            var object = {};
            Object.keys(modeleSchemaFields).forEach(function(modeleSchemaFieldsKey){
              var value = modeleSchemaFields[modeleSchemaFieldsKey];
              var key = modeleSchemaFieldsKey;
              object[value] = article[key];
            });
            var modele = schema['Modele'].model.build(object);
            // Associated
            var object = {};
            object[modeleSchema.associated.fieldName] = article[modeleSchema.associated.index];
            modeleSchema.associated.model.find(object).then(function(marque){
              marque.addModele(modele);
            });
            modele.save().then(function(modele) {
            }).catch(function(e){
              console.log(e);
            });
            // Modele
          }
          i++;
        });
      }
      //process.exit();
    });
  }
};

module.exports = index;
