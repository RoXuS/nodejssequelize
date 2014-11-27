var marque = Container.db.define('marque', {
  mar_nom: Container.Sequelize.STRING,
  mar_label: Container.Sequelize.STRING
});

marque.hasMany(Container.model.modele);

module.exports = marque;
