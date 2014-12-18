var famille = Container.db.define('famille', {
  nom: {type: Container.Sequelize.STRING, unique: true}
});

module.exports = famille;
