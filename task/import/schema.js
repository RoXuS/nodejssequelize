var schema = {
  'Marque': {
    'model': Container.model.marque,
    'fields': [
      {
        'index': 0,
        'fieldName': 'label'
      },
      {
        'index': 0,
        'fieldName': 'nom'
      }
    ]
    },
  'Modele': {
    'model': Container.model.modele,
    'associated': [
      {
        'model': Container.model.marque,
        'fieldName': 'nom',
        'index': '0',
        'function': 'addModele'
      } 
    ],
    'fields': [
      {
        'index': 1,
        'fieldName': 'nom'
      },
      {
        'index': 2,
        'fieldName': 'dated'
      },
      {
        'index': 3,
        'fieldName': 'datef'
      },
      {
        'index': 4,
        'fieldName': 'nbporte'
      },
      {
        'index': 5,
        'fieldName': 'typecarrosserie'
      }
    ]
  },
  'Fournisseur': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 17,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur2': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 20,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur3': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 23,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur4': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 26,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur5': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 29,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur6': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 32,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur7': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 35,
        'fieldName': 'nom'
      }
    ]
  },
  'Famille': {
    'model': Container.model.famille,
    'fields': [
      {
        'index': 6,
        'fieldName': 'nom'
      }
    ]
   },
  'Famille2': {
    'model': Container.model.famille,
    'associated': [
      {
        'model': Container.model.famille,
        'fieldName': 'nom',
        'index': '6',
        'function': 'addFamille'
      } 
    ],
    'fields': [
      {
        'index': 7,
        'fieldName': 'nom'
      }
    ]
  },
  'Famille3': {
    'model': Container.model.famille,
    'associated': [
      {
        'model': Container.model.famille,
        'fieldName': 'nom',
        'index': '7',
        'function': 'addFamille'
      } 
    ],
    'fields': [
      {
        'index': 8,
        'fieldName': 'nom'
      }
    ]
  },
  'Article':{
    'model': Container.model.article,
    'associated': [
      {
        'model': Container.model.famille,
        'fieldName': 'nom',
        'index': '6',
        'function': 'addArticle'
      },
      {
        'model': Container.model.famille,
        'fieldName': 'nom',
        'index': '7',
        'function': 'addArticle'
      },
      {
        'model': Container.model.modele,
        'fieldName': 'nom',
        'index': '1',
        'function': 'addArticle'
      },
      {
        'model': Container.model.famille,
        'fieldName': 'nom',
        'index': '8',
        'function': 'addArticle'
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '17',
        'function': 'addArticle',
        'params': [
          {
            'index': 16,
            'fieldName': 'reference'
          },  
          {
            'index': 18,
            'fieldName': 'prix'
          }
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '20',
        'function': 'addArticle',
        'params': [
          {
            'index': 19,
            'fieldName': 'reference'
          },  
          {
            'index': 21,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '23',
        'function': 'addArticle',
        'params': [
          {
            'index': 22,
            'fieldName': 'reference'
          },  
          {
            'index': 24,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '26',
        'function': 'addArticle',
        'params': [
          {
            'index': 25,
            'fieldName': 'reference'
          },  
          {
            'index': 26,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '32',
        'function': 'addArticle',
        'params': [
          {
            'index': 31,
            'fieldName': 'reference'
          },  
          {
            'index': 33,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '35',
        'function': 'addArticle',
        'params': [
          {
            'index': 34,
            'fieldName': 'reference'
          },  
          {
            'index': 36,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '29',
        'function': 'addArticle',
        'params': [
          {
            'index': 27,
            'fieldName': 'reference'
          },  
          {
            'index': 30,
            'fieldName': 'prix'
          } 
        ]
      } 
    ],
    'fields': [,
      {
        'index': 9,
        'fieldName': 'commentaire'
      },
      {
        'index': 10,
        'fieldName': 'designation'
      },
      {
        'index': 11,
        'fieldName': 'web'
      },
      {
        'index': 12,
        'fieldName': 'pvp'
      },
      {
        'index': 14,
        'fieldName': 'net'
      },
      {
        'index': 15,
        'fieldName': 'refoem'
      },
      {
        'index': 13,
        'fieldName': 'rse'
      }
    ]
  }
};

module.exports = schema;
