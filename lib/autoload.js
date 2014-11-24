Container.model = {};

var autoload = function() {
  Container.model.modele = require(__dirname + '/../model/modele.js');
  Container.model.marque = require(__dirname + '/../model/marque.js');
};

module.exports = autoload;
