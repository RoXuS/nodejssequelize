var async = require('async');
var array = [];
var stringify = require('csv-stringify');
var fs = require('fs');
var async = require('async');


// input = [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ];
// stringify(input, function(err, output){
//   output.should.eql('1,2,3,4\na,b,c,d');
// });
var index = {
  process: function() {
    Container.model.marque.findAll({}).then(function(marques){
      var input = [];
      var p = 0;

      marques.forEach(function(marque){
        var newMarque = [];
        newMarque.push(1);
        newMarque.push(marque.nom);
        newMarque.push('Accueil');
        newMarque.push(0);
        input.push(newMarque);
      });

      stringify(input, function(err, marqueOutput){
        Container.model.modele.findAll({}).then(function(modeles){
          var input = [];

          var q = async.queue(function(modeleObject, callback){
              input.push(modeleObject.newModele);
              callback();
          });

          modeles.forEach(function(modele){
            var newModele = [];
            modele.getMarque().then(function(marque){
              newModele.push(1);
              newModele.push(((isNaN(modele.nom)) ? modele.nom : parseInt(modele.nom, 10)+"categ"));
              newModele.push(marque.nom);
              newModele.push(0);
              q.push({newModele: newModele})
            });
          });

          q.drain = function(){
            stringify(input, function(err, modeleOutput){
              var processFamille = function(q, newFamille, familleId, familleNom) {
                Container.model.famille.find({where: {id: familleId}}).then(function(famille){
                  newFamille.push(1);
                  newFamille.push(familleNom);
                  newFamille.push(famille.nom);
                  newFamille.push(0);
                  q.push({newFamille: newFamille})
                });
              };
              Container.model.famille.findAll({}).then(function(familles){
                var input = [];

                var q = async.queue(function(familleObject, callback){
                    input.push(familleObject.newFamille);
                    callback();
                });

                familles.forEach(function(famille){
                  var newFamille = [];

                  if(famille.nom !== '') {
                    if(famille.dataValues.familleId === null) {
                        newFamille.push(1);
                        newFamille.push(famille.nom);
                        newFamille.push('');
                        newFamille.push(0);
                        q.push({newFamille: newFamille})
                    } else {
                      processFamille(q, newFamille, famille.dataValues.familleId, famille.nom);
                    }
                  }
                });

                q.drain = function(){
                  stringify(input, function(err, familleOutput){
                    var output = marqueOutput + modeleOutput + familleOutput;
                    fs.writeFileSync(__dirname+'/output/categories.csv', output)
                  });
                }

              });
            });
          }

        });
      });

    });





  Container.model.fournisseur.findAll({}).then(function(fournisseurs){
    var input = [];

    fournisseurs.forEach(function(fournisseur){
      var newFournisseur = [];
      newFournisseur.push(1);
      newFournisseur.push(fournisseur.nom);
      input.push(newFournisseur);
    });

    stringify(input, function(err, output){
      fs.writeFileSync(__dirname+'/output/fournisseur.csv', output)
    });

  });

  Container.model.article.findAll({}).then(function(articles){
    var input = [];
    var first = 0;

    var q2 = async.queue(function(articleObject, callback){
      input.push(articleObject.article);
      callback();
    }, 1);

    q2.drain = function(){
       stringify(input, function(err, output){
        fs.writeFileSync(__dirname+'/output/article.csv', output)
      });
    };

    articles.forEach(function(article){
      var categories = "";

      var q = async.queue(function(categorieObject, callback){
        var categorie = categorieObject.categorie;
        if(categorie && categorie !== '') {
          categories += ((isNaN(categorie)) ? categorie : parseInt(categorie, 10)+"categ") + ",";
        }
        callback();
      }, 1);

      article.getFamilles().then(function(familles){
        article.getModeles().then(function(modeles){
          var executed = 0;
          modeles.forEach(function(modele){
            modele.getMarque().then(function(marque){
              if(executed === 0) {
                executed = 1;
                familles.forEach(function(famille){
                  q.push({categorie: famille.nom});
                });
              }
              q.push({categorie: modele.nom});
              q.push({categorie: marque.nom});
            });
          });
        });
      });

      q.drain = function(){
        var newArticle = [];

        if(first === 0) {
          first = 1;
          //Active
          newArticle.push('Active');
          //Name
          newArticle.push('Designation');
          //Categorie
          newArticle.push('Categorie');
          //Price
          newArticle.push('Price');
          //Taxe id rule
          newArticle.push('Taxe');
          //On sale
          newArticle.push('On sale');
          //Reference
          newArticle.push('Reference');
          //Supplier reference
          newArticle.push('Reference supplier');
          //Description
          newArticle.push('Description');

          q2.push({article: newArticle});
          newArticle = [];

        }

        //Active
        newArticle.push(1);
        //Name
        newArticle.push(article.designation);
        //Categorie
        var formatCategories = categories.substr(0, categories.length-1)
        newArticle.push(formatCategories);
        //Price
        newArticle.push(article.net);
        //Taxe id rule
        newArticle.push(1);
        //On sale
        newArticle.push(1);
        //Reference
        newArticle.push(article.web);
        //Supplier reference
        newArticle.push(article.refoem);
        //Description
        newArticle.push(article.commentaire);

        q2.push({article: newArticle});

      }
    });



  });

  }
};

module.exports = index;
