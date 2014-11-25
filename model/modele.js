var modele = Container.db.define('modele', {
  mod_nom: Container.Sequelize.STRING,
  mod_dated: Container.Sequelize.DATE,
  mod_datef: Container.Sequelize.DATE,
  mod_nbporte: Container.Sequelize.STRING,
  mod_typecarrosserie: Container.Sequelize.STRING
});

modele.hasMany(Container.model.article);
module.exports = modele;
