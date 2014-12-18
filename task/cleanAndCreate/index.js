var index = {
  process: function(callback) {
    Container.model.origin.hasMany(Container.model.article, {foreignKeyConstraint: false});
    Container.model.famille.hasMany(Container.model.famille, {foreignKeyConstraint: false});
    Container.model.marque.hasMany(Container.model.modele, {foreignKeyConstraint: true});
    Container.model.modele.belongsTo(Container.model.marque, {foreignKeyConstraint: true});

    Container.model.famille.hasMany(Container.model.article);
    Container.model.article.hasMany(Container.model.famille);

    Container.model.articlesfournisseurs = Container.db.define('articlesfournisseurs', 
                        {
                          prix: Container.Sequelize.STRING,
                          reference: Container.Sequelize.STRING,
                          rse: Container.Sequelize.STRING
                        });

    Container.model.article.hasMany(Container.model.fournisseur, { foreignKeyConstraint: false, through: Container.model.articlesfournisseurs});
    Container.model.fournisseur.hasMany(Container.model.article, { foreignKeyConstraint: false, through: Container.model.articlesfournisseurs});


    Container.db.drop({force: true}).then(function(){
      Container.db.sync().then(callback);
    });
  }
};

module.exports = index;
