var async = require('async');
var array = [];
var stringify = require('csv-stringify');
var fs = require('fs');
var async = require('async');

var index = {
  process: function(type) {
    if(type === 'categories') {
    Container.model.marque.findAll({}).then(function(marques){
      var input = [];
      var p = 0;

      marques.forEach(function(marque){
        var newMarque = [];
        if(p === 0) {
          newMarque.push(1);
          newMarque.push('Marque');
          newMarque.push('');
          newMarque.push(0);
          input.push(newMarque);
        }
        p++;
        newMarque.push(1);
        newMarque.push(marque.nom);
        newMarque.push('Marque');
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

    } else if (type === 'fournisseur') {
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
    } else if (type === 'article') {
      Container.model.article.findAll({}).then(function(articles){
console.log(articles.length);
        var input = [];
        var first = 0;

        // articles = articles.slice(0, 100);

        articles.forEach(function(article){
          var categories = "";

          var q = async.queue(function(categorieObject, callback){
            var categorie = categorieObject.categorie;
            if(categorie && categorie !== '') {
              categories += ((isNaN(categorie)) ? categorie : parseInt(categorie, 10)+"categ") + ",";
            }
            callback();
          }, 1);

          console.log(article.web);
          console.log('get famille');
          article.getFamilles().then(function(familles){
            console.log('get modele');
            article.getModeles().then(function(modeles){
              var executed = 0;
              console.log('for each modele get marque')
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
              //Image:
              newArticle.push('Image');

              input.push({article: newArticle});
              newArticle = [];

            }
            var imageUrl = '';

            article.getFournisseurs().then(function(fournisseurs){
              fournisseurs.forEach(function(fournisseur){
                var reference = fournisseur.articlesfournisseurs.reference;
                if(fournisseur.nom === 'ANIEL') {
                  var filesNameArray = fs.readdirSync(__dirname+'/prasco');

                  filesNameArray.forEach(function(file){
                    var fileName = file.split('.')[0];
                    if(fileName === reference) {
                      imageUrl = 'http://piecesautomax.fr/img/aniel/' + file;
                    }
                  });
                }
                if(fournisseur.nom === 'NRL' && imageUrl === '') {

                  var filesNameArray = fs.readdirSync(__dirname+'/nrl');

                  filesNameArray.forEach(function(file){

                    var fileName = file.split('.')[0];
                    var fileName = decodeURI(fileName);
                    var splittedFilename = fileName.split(' ');
                    if(splittedFilename.length > 2) {
                      var fileName = splittedFilename[0] + ' ' + splittedFilename[1] + '/' + splittedFilename[2];
                    }
                    if(fileName === reference) {
                      imageUrl = 'http://piecesautomax.fr/img/nrl/' + file.replace(/%/g, '%25');
                    }
                  });
                }
              });

console.log(imageUrl);
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
              //Image
              newArticle.push(imageUrl);

              input.push(newArticle);
console.log(input);

              stringify(input, function(err, output){
console.log(output);
process.exit();
                fs.writeFileSync(__dirname+'/output/article.csv', output)
              });

            }).catch(function(err){
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
              //Image
              newArticle.push(imageUrl);

              input.push({article: newArticle});

              stringify(input, function(err, output){
                fs.writeFileSync(__dirname+'/output/article.csv', output)
              });
            });
          }
        });
      });
    }
  }
};

module.exports = index;
