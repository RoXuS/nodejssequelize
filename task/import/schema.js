var schema = {
  'Marque': {
    'model': Container.model.marque,
    'fields': [
      {
        'index': 3,
        'fieldName': 'mar_label'
      },
      {
        'index': 3,
        'fieldName': 'mar_nom'
      }
    ]
    },
  'Modele': {
    'model': Container.model.modele,
    'associated': [
      {
        'model': Container.model.marque,
        'fieldName': 'mar_nom',
        'index': '3',
        'associatedFunction': 'addModele'
      } 
    ],
    'fields': [
      {
        'index': 5,
        'fieldName': 'mod_nom'
      },
      {
        'index': 6,
        'fieldName': 'mod_dated'
      },
      {
        'index': 7,
        'fieldName': 'mod_datef'
      },
      {
        'index': 22,
        'fieldName': 'mod_nbporte'
      },
      {
        'index': 21,
        'fieldName': 'mod_typecarrosserie'
      }
    ]
  }
  // 'Origin': {
  //   'model': Container.model.origin,
  //   'fields': [
  //     {
  //       'index': 29,
  //       'fieldName': 'ori_nom'
  //     }
  //   ]
  // },
  // 'Famille': {
  //   'model': Container.model.famille,
  //   'fields': [
  //     {
  //       'index': 30,
  //       'fieldName': 'fam_nom'
  //     }
  //   ]
  //  },
  // 'Famille2': {
  //   'model': Container.model.famille,
  //   'associated': [
  //     {
  //       'model': Container.model.famille,
  //       'fieldName': 'fam_nom',
  //       'index': '30',
  //       'associatedFunction': 'addFamille'
  //     } 
  //   ],
  //   'fields': [
  //     {
  //       'index': 31,
  //       'fieldName': 'fam_nom'
  //     }
  //   ]
  // },
  // 'Famille3': {
  //   'model': Container.model.famille,
  //   'associated': [
  //     {
  //       'model': Container.model.famille,
  //       'fieldName': 'fam_nom',
  //       'index': '31',
  //       'associatedFunction': 'addFamille'
  //     } 
  //   ],
  //   'fields': [
  //     {
  //       'index': 32,
  //       'fieldName': 'fam_nom'
  //     }
  //   ]
  // }
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
