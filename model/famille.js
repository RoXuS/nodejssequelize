var famille = Container.db.define('famille', {
  fam_nom: {type: Container.Sequelize.STRING, unique: true}
});

famille.hasMany(famille);
module.exports = famille;
