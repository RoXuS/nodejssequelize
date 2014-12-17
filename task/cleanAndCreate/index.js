var index = {
  process: function(callback) {
    Container.model.article.drop().then(function() {
      Container.model.fournisseur.drop().then(function() {
        Container.model.modele.drop().then(function() {
          Container.model.marque.drop().then(function() {
            Container.model.origin.drop().then(function() {
              Container.model.famille.drop().then(function() {
                Container.model.famille.sync().then(function() {
                  Container.model.origin.sync().then(function() {
                    Container.model.marque.sync().then(function() {
                      Container.model.modele.sync().then(function() {
                        Container.model.fournisseur.sync().then(function() {
                          Container.model.article.sync().then(function(){
                            if(callback !== undefined) {
                              callback();
                            }
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
};

module.exports = index;
