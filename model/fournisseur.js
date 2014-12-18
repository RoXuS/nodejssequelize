var fournisseur = Container.db.define('fournisseur', {
  fou_rs: Container.Sequelize.STRING,
  fou_adr: Container.Sequelize.STRING,
  fou_adr2: Container.Sequelize.STRING,
  fou_cp: Container.Sequelize.STRING,
  fou_ville: Container.Sequelize.STRING,
  fou_contact: Container.Sequelize.STRING,
  fou_tel: Container.Sequelize.STRING,
  fou_email: Container.Sequelize.STRING,
  fou_remise: Container.Sequelize.INTEGER,
  fou_pv: Container.Sequelize.INTEGER
});

module.exports = fournisseur;
