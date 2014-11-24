Container.Sequelize = require('sequelize');

var config = function(callback){
  Container.db = new Container.Sequelize('nodejssequelize', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
  });
  Container.db
  .authenticate()
  .then(callback)
  .catch(function(){
      console.log('Connection has been established successfully.')
  });
};

module.exports = config;
