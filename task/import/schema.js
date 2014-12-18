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
  'Origin': {
    'model': Container.model.origin,
    'fields': [
      {
        'index': 29,
        'fieldName': 'nom'
      }
    ]
  },
  'Fournisseur': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 41,
        'fieldName': 'nom'
      }
    ]
   },
  'Fournisseur1': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 42,
        'fieldName': 'nom'
      }
    ]
   },
  'Fournisseur2': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 43,
        'fieldName': 'nom'
      }
    ]
   },
  'Fournisseur3': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 44,
        'fieldName': 'nom'
      }
    ]
   },
  'Fournisseur4': {
    'model': Container.model.fournisseur,
    'fields': [
      {
        'index': 45,
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
