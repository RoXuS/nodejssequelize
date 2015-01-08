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
        'index': 5,
        'fieldName': 'nom'
      },
      {
        'index': 6,
        'fieldName': 'dated'
      },
      {
        'index': 7,
        'fieldName': 'datef'
      },
      {
        'index': 22,
        'fieldName': 'nbporte'
      },
      {
        'index': 21,
        'fieldName': 'typecarrosserie'
      }
    ]
  },
  'Fournisseur': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 29,
        'fieldName': 'nom'
      }
    ]
  },
  'Famille': {
    'model': Container.model.famille,
    'fields': [
      {
        'index': 30,
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
        'index': '30',
        'function': 'addFamille'
      } 
    ],
    'fields': [
      {
        'index': 31,
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
        'index': '31',
        'function': 'addFamille'
      } 
    ],
    'fields': [
      {
        'index': 32,
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
        'index': '30',
        'function': 'addArticle'
      },
      {
        'model': Container.model.famille,
        'fieldName': 'nom',
        'index': '31',
        'function': 'addArticle'
      },
      {
        'model': Container.model.famille,
        'fieldName': 'nom',
        'index': '32',
        'function': 'addArticle'
      },
      {
        'model': Container.model.fournisseur,
        'fieldName': 'nom',
        'index': '29',
        'function': 'addArticle',
        'params': [
          {
            'index': 13,
            'fieldName': 'reference'
          },  
          {
            'index': 14,
            'fieldName': 'prix'
          },   
          {
            'index': 15,
            'fieldName': 'rse'
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
            'index': 19,
            'fieldName': 'reference'
          },  
          {
            'index': 20,
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
            'index': 23,
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
        'index': '29',
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
        'index': '29',
        'function': 'addArticle',
        'params': [
          {
            'index': 27,
            'fieldName': 'reference'
          },  
          {
            'index': 28,
            'fieldName': 'prix'
          } 
        ]
      } 
    ],
    'fields': [
      {
        'index': 11,
        'fieldName': 'web'
      },
      {
        'index': 9,
        'fieldName': 'designation'
      },
      {
        'index': 12,
        'fieldName': 'pvp'
      },
      {
        'index': 35,
        'fieldName': 'commentaire'
      },
      {
        'index': 38,
        'fieldName': 'commentaire1'
      },
      {
        'index': 39,
        'fieldName': 'commentaire2'
      },
      {
        'index': 40,
        'fieldName': 'commentaire3'
      },
      {
        'index': 16,
        'fieldName': 'referenceNrl'
      },
      {
        'index': 17,
        'fieldName': 'courteNrl'
      },
      {
        'index': 18,
        'fieldName': 'prixNrl'
      },
      {
        'index': 37,
        'fieldName': 'certificat'
      },
      {
        'index': 36,
        'fieldName': 'nature'
      }
    ]
  }
};

module.exports = schema;


/* Unicité modele */
/* Fournisseur 1 colonne ?? */
/* Origins bien origine ?*/

//
//
// ['WEB',
//   'REF UNIQUE',
//   'IMG',
//   'MARQUE',
//   'MODELE LONG',
//   'MODELE',
//   'DATE D',
//   'DATE F',
//   'DESIGNATION PAM',
//   'DESIGNATION 2',
//   'DESIGNATION PRASCO',
//   'REF PAM',
//   'PVP',
//   'REF ANIEL',
//   'PX VTE ANIEL',
//   'RSEANIEL',
//   'Ref NRL Originale',
//   'REF NRL COURTE',
//   'PX HA NRL',
//   'REF PRASCO',
//   'PX HA PRASCO',
//   'TYPE CARROSSERIE',
//   'NB PORTE',
//   'HELLA',
//   'PX HA HELLA',
//   'MARELLI',
//   'PX HA MARELLI',
//   'VALEO',
//   'PX HA VALEO',
//   'ORIGINE',
//   'FAMILLE PAM',
//   'FAMILLE PAM 2',
//   'FAMILLE PAM 3',
//   'D/G',
//   'AV/AR',
//   'COMMENTAIRE',
//   'NATURE',
//   'CERTIFICAT',
//   'COMMENTAIRE 1',
//   'COMMENTAIRE 2',
//   'COMMENTAIRE 3'
// ]
