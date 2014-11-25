Container.model = {};

var autoload = function() {
	Container.model.article = require(__dirname + '/../model/article.js');
	Container.model.modele = require(__dirname + '/../model/modele.js');
	Container.model.marque = require(__dirname + '/../model/marque.js');
	Container.model.origin = require(__dirname + '/../model/origin.js');
	Container.model.famille = require(__dirname + '/../model/famille.js');
	Container.model.fournisseur = require(__dirname + '/../model/fournisseur.js');
};

module.exports = autoload;
