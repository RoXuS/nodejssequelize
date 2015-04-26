var marque = Container.db.define('marque', {
  nom: {
    type: Container.Sequelize.STRING,
    unique: true,
    validate: {
      lengthPlus: function(value) {
        if(value.trim().length === 0) {
          throw new Error('Empty string')
        }
      }
    }
  },
  label: Container.Sequelize.STRING
});

module.exports = marque;
