var modele = Container.db.define('modele', {
  mod_nom: Container.Sequelize.STRING,
  mod_dated: Container.Sequelize.STRING,
  mod_datef: Container.Sequelize.STRING,
  mod_nbporte: Container.Sequelize.STRING,
  mod_typecarrosserie: Container.Sequelize.STRING
});

module.exports = modele;
