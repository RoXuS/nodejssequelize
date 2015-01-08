var origin = Container.db.define('origin', {
  nom: {
          type: Container.Sequelize.STRING,
          allowNull: false,
          allowEmpty: false,
          notNull: true,
          notEmpty: true
  }


});

module.exports = origin;
