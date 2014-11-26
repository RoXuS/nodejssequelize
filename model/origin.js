var origin = Container.db.define('origin', {
  ori_nom: Container.Sequelize.STRING
});

origin.hasMany(Container.model.article);
module.exports = origin;

