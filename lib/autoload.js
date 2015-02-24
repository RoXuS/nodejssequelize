Container.model = {};

var autoload = function(callback) {
	Container.model.article = require(__dirname + '/../model/article.js');
	Container.model.modele = require(__dirname + '/../model/modele.js');
	Container.model.fournisseur = require(__dirname + '/../model/fournisseur.js');
	Container.model.marque = require(__dirname + '/../model/marque.js');
	Container.model.famille = require(__dirname + '/../model/famille.js');

  Container.model.famille.hasMany(Container.model.famille, {foreignKeyConstraint: false});
  Container.model.marque.hasMany(Container.model.modele, {foreignKeyConstraint: true});
  Container.model.modele.belongsTo(Container.model.marque, {foreignKeyConstraint: true});

  Container.model.famille.hasMany(Container.model.article);
  Container.model.article.hasMany(Container.model.famille);

  Container.model.modele.hasMany(Container.model.article, {foreignKeyConstraint: true});
  Container.model.article.hasMany(Container.model.modele, {foreignKeyConstraint: true});

  Container.model.articlesfournisseurs = Container.db.define('articlesfournisseurs', 
    {
      prix: Container.Sequelize.STRING,
      reference: {type: Container.Sequelize.STRING, notNull: true, notEmpty: true, notIn: [["",''," "]]}
    }
  );

  Container.model.article.hasMany(Container.model.fournisseur, { foreignKeyConstraint: false, through: Container.model.articlesfournisseurs});
  Container.model.fournisseur.hasMany(Container.model.article, { foreignKeyConstraint: false, through: Container.model.articlesfournisseurs});
  return callback();
};

module.exports = autoload;
