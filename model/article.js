var article = Container.db.define('article', {
  art_web: Container.Sequelize.BOOLEAN,
  art_designation: Container.Sequelize.STRING,
  art_pvp: Container.Sequelize.INTEGER,
  art_cote: Container.Sequelize.STRING,
  art_position: Container.Sequelize.STRING,
  art_prix: Container.Sequelize.INTEGER,
  art_commentaire: Container.Sequelize.TEXT
});

module.exports = article;
