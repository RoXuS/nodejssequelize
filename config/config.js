Container.Sequelize = require('sequelize');

var config = function(callback){
  Container.db = new Container.Sequelize('nodejssequelize', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
  });
  Container.db
  .authenticate()
  .then(callback)
  .catch(function(e){
      console.log(e,'Unable to connect to mysql server.')
  });
};

module.exports = config;
