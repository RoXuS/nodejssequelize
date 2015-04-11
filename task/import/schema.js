var schema = {
  'Marque': {
    'model': Container.model.marque,
    'fields': [
      {
        'index': 3,
        'fieldName': 'label'
      },
      {
        'index': 3,
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
        'index': '3',
        'function': 'addModele'
      } 
    ],
    'fields': [
      {
        'index': 4,
        'fieldName': 'nom'
      },
      {
        'index': 5,
        'fieldName': 'dated'
      },
      {
        'index': 6,
        'fieldName': 'datef'
      },
      {
        'index': 25,
        'fieldName': 'nbporte'
      },
      {
        'index': 24,
        'fieldName': 'typecarrosserie'
      }
    ]
  },
  'Fournisseur': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 14,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur2': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 22,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur3': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 27,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur4': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 31,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur5': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 34,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur6': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 37,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur7': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 40,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur8': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 18,
        'fieldName': 'nom'
      }
    ]
  },
  'Famille': {
    'model': Container.model.famille,
    'fields': [
      {
        'index': 42,
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
        'index': '42',
        'function': 'addFamille'
      } 
    ],
    'fields': [
      {
        'index': 43,
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
        'index': '43',
        'function': 'addFamille'
      } 
    ],
    'fields': [
      {
        'index': 44,
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
        'index': '42',
        'function': 'addArticle'
      },
      {
        'model': Container.model.famille,
        'fieldName': 'nom',
        'index': '43',
        'function': 'addArticle'
      },
      {
        'model': Container.model.modele,
        'fieldName': 'nom',
        'index': '4',
        'function': 'addArticle'
      },
      {
        'model': Container.model.famille,
        'fieldName': 'nom',
        'index': '44',
        'function': 'addArticle'
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '14',
        'function': 'addArticle',
        'params': [
          {
            'index': 13,
            'fieldName': 'reference'
          },  
          {
            'index': 15,
            'fieldName': 'prix'
          }
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '22',
        'function': 'addArticle',
        'params': [
          {
            'index': 21,
            'fieldName': 'reference'
          },  
          {
            'index': 23,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '27',
        'function': 'addArticle',
        'params': [
          {
            'index': 26,
            'fieldName': 'reference'
          },  
          {
            'index': 28,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '31',
        'function': 'addArticle',
        'params': [
          {
            'index': 30,
            'fieldName': 'reference'
          },  
          {
            'index': 32,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '34',
        'function': 'addArticle',
        'params': [
          {
            'index': 33,
            'fieldName': 'reference'
          },  
          {
            'index': 35,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '37',
        'function': 'addArticle',
        'params': [
          {
            'index': 36,
            'fieldName': 'reference'
          },  
          {
            'index': 38,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '40',
        'function': 'addArticle',
        'params': [
          {
            'index': 39,
            'fieldName': 'reference'
          },  
          {
            'index': 41,
            'fieldName': 'prix'
          } 
        ]
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '18',
        'function': 'addArticle',
        'params': [
          {
            'index': 17,
            'fieldName': 'reference'
          },  
          {
            'index': 19,
            'fieldName': 'prix'
          } 
        ]
      } 
    ],
    'fields': [,
      {
        'index': 45,
        'fieldName': 'commentaire'
      },
      {
        'index': 7,
        'fieldName': 'designation'
      },
      {
        'index': 9,
        'fieldName': 'description'
      },
      {
        'index': 1,
        'fieldName': 'web'
      },
      {
        'index': 10,
        'fieldName': 'pvp'
      },
      {
        'index': 12,
        'fieldName': 'net'
      },
      {
        'index': 29,
        'fieldName': 'refoem'
      },
      {
        'index': 11,
        'fieldName': 'rse'
      }
    ]
  }
};

module.exports = schema;
