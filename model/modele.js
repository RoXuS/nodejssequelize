var modele = Container.db.define('modele', {
  nom: Container.Sequelize.STRING,
  dated: Container.Sequelize.STRING,
  datef: Container.Sequelize.STRING,
  nbporte: Container.Sequelize.STRING,
  typecarrosserie: Container.Sequelize.STRING
});

module.exports = modele;
