var modele = Container.db.define('modele', {
  nom: { type: Container.Sequelize.STRING, unique: 'compositeIndex' },
  dated: { type: Container.Sequelize.STRING, unique: 'compositeIndex' },
  datef: { type: Container.Sequelize.STRING, unique: 'compositeIndex' },
  nbporte: Container.Sequelize.STRING,
  typecarrosserie: Container.Sequelize.STRING
});

module.exports = modele;
