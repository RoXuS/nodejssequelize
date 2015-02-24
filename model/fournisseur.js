var fournisseur = Container.db.define('fournisseur', {
  nom: {
          type: Container.Sequelize.STRING,
          unique: true
      }
});

module.exports = fournisseur;
