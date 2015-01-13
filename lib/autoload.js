Container.model = {};

var autoload = function(callback) {
	Container.model.article = require(__dirname + '/../model/article.js');
	Container.model.modele = require(__dirname + '/../model/modele.js');
	Container.model.fournisseur = require(__dirname + '/../model/fournisseur.js');
	Container.model.marque = require(__dirname + '/../model/marque.js');
	Container.model.famille = require(__dirname + '/../model/famille.js');
  return callback();
};

module.exports = autoload;
