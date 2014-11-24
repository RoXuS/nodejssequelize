var Marque = Container.db.define('Marque', {
  name: Container.Sequelize.STRING
});

Marque.hasMany(Container.model.modele);

module.exports = Marque;
