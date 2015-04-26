var modele = Container.db.define('modele', {
  nom: {
    type: Container.Sequelize.STRING,
    unique: 'compositeIndex',
    validate: {
      lengthPlus: function(value) {
        if(value.trim().length === 0) {
          throw new Error('Empty string')
        }
      }
    }
  },
  dated: { type: Container.Sequelize.STRING, unique: 'compositeIndex' },
  datef: { type: Container.Sequelize.STRING, unique: 'compositeIndex' },
  nbporte: Container.Sequelize.STRING,
  typecarrosserie: Container.Sequelize.STRING
});

module.exports = modele;
