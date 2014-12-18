var marque = Container.db.define('marque', {
  mar_nom: {type: Container.Sequelize.STRING, unique: true},
  mar_label: Container.Sequelize.STRING
});

marque.hasMany(Container.model.modele);
Container.model.modele.belongsTo(marque);

module.exports = marque;
