var attribut = Container.db.define('attribut', 
  {
    nom: { type: Container.Sequelize.STRING, unique: true }
  }
);

module.exports = fournisseur;
