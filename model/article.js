var article = Container.db.define('article', {
  web: {type: Container.Sequelize.STRING, unique: true},
  designation: Container.Sequelize.STRING,
  pvp: Container.Sequelize.STRING,
  net: Container.Sequelize.STRING,
  commentaire: Container.Sequelize.TEXT,
  refoem: Container.Sequelize.STRING,
  rse: Container.Sequelize.STRING
});

module.exports = article;
