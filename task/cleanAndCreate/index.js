var index = {
  process: function(callback) {
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


    Container.db.drop({force: true}).then(function(){
      Container.db.sync().then(callback);
    });
  }
};

module.exports = index;
