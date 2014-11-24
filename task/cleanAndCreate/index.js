var index = {
  process: function(){
    Container.model.modele.drop().then(function() {
      Container.model.marque.drop().then(function() {
        Container.model.marque.sync().then(function() {
          Container.model.modele.sync();
        });
      });
    });
  }
};

module.exports = index;
