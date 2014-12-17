var schema = {
  'Marque': {
    'model': Container.model.marque,
    'fields': {
      '3': 'mar_nom',
      '3': 'mar_label'
    }
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
    'fields': {
      '5': 'mod_nom',
      '6': 'mod_dated',
      '7': 'mod_datef',
      '22': 'mod_nbporte',
      '21': 'mod_typecarrosserie'
    }
  },
  'Origin': {
    'model': Container.model.origin,
    'fields': {
      '29': 'ori_nom'
    }
  },
  'Famille': {
    'model': Container.model.famille,
    'fields': {
      '30': 'fam_nom'
    }
  },
  'Famille': {
    'model': Container.model.famille,
    'associated': [
      {
        'model': Container.model.famille,
        'fieldName': 'fam_nom',
        'index': '30',
        'associatedFunction': 'addFamille'
      } 
    ],
    'fields': {
      '31': 'fam_nom'
     }
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
