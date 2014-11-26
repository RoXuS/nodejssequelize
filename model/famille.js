var famille = Container.db.define('famille', {
  fam_nom: Container.Sequelize.STRING,
  fam_parent: Container.Sequelize.STRING
});

famille.hasMany(Container.model.article);
module.exports = famille;
