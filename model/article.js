var article = Container.db.define('article', {
  web: Container.Sequelize.BOOLEAN,
  designation: Container.Sequelize.STRING,
  pvp: Container.Sequelize.INTEGER,
  referenceNrl: Container.Sequelize.STRING,
  // prixAniel: Container.Sequelize.INTEGER,
  commentaire: Container.Sequelize.TEXT,
  commentaire1: Container.Sequelize.TEXT,
  commentaire2: Container.Sequelize.TEXT,
  commentaire3: Container.Sequelize.TEXT,
  // referenceAniel: Container.Sequelize.STRING,
  // rseAniel: Container.Sequelize.STRING,
  courteNrl: Container.Sequelize.STRING,
  // referencePrasco: Container.Sequelize.STRING,
  // prixPrasco: Container.Sequelize.STRING,
  nature: Container.Sequelize.STRING,
  certificat: Container.Sequelize.STRING
});


module.exports = article;
