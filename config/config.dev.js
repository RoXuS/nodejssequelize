Container.Sequelize = require('sequelize');

var config = function(callback){
  Container.db = new Container.Sequelize('nodejssequelize', 'root', 'root', {
    host: "localhost",
    dialect: "postgres"
  });
  Container.db
  .authenticate()
  .then(callback)
  .catch(function(e){
      console.log(e,'Unable to connect to postgres server.')
  });

};

module.exports = config;
