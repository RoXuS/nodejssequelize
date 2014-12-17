var famille = Container.db.define('famille', {
  fam_nom: {type: Container.Sequelize.STRING, unique: true}
});

famille.hasMany(Container.model.article);
famille.hasMany(famille, {
  // foreignKeyConstraint: false,
  // unique: false
});
module.exports = famille;
