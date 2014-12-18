var index = {
  process: function(callback) {
Container.model.article.hasMany(Container.model.famille, { as: 'idfamille', through: 'articleFamille'});
Container.model.famille.hasMany(Container.model.article, { as: 'idarticle',through: 'articleFamille'});
Container.db.drop().then(function(){

Container.db.sync();
});  }
};

module.exports = index;
