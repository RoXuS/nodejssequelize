var Modele = Container.db.define('Modele', {
  name: Container.Sequelize.STRING,
  dateto: Container.Sequelize.DATE,
  datefrom: Container.Sequelize.DATE,
  numberDoor: Container.Sequelize.STRING,
  bodyType: Container.Sequelize.STRING
});

module.exports = Modele;
