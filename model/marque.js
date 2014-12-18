var marque = Container.db.define('marque', {
  nom: {type: Container.Sequelize.STRING, unique: true},
  label: Container.Sequelize.STRING
});

module.exports = marque;
