var index = {
  process: function(callback) {
    Container.db.drop({force: true}).then(function(){
      Container.db.sync().then(callback);
    });
  }
};

module.exports = index;
