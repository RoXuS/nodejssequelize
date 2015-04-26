var famille = Container.db.define('famille', {
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
  }
});

module.exports = famille;
