var schema = {
  'Marque': {
    'model': Container.model.marque,
    'fields': {
      '3': 'mar_nom',
      '4': 'mar_label'
    }
  },
  'Modele': {
    'model': Container.model.modele,
    'associated': {
      'model': Container.model.marque,
      'fieldName': 'mar_nom',
      'index': '3'
    },
    'fields': {
      '5': 'mod_nom',
      '6': 'mod_dated',
      '7': 'mod_datef',
      '22': 'mod_nbporte',
      '21': 'mod_typecarrosserie'
    }
  }
};

module.exports = schema;

//  mod_nom: Container.Sequelize.STRING,
//   mod_dated: Container.Sequelize.DATE,
//   mod_datef: Container.Sequelize.DATE,
//   mod_nbporte: Container.Sequelize.STRING,
//   mod_typecarrosserie: Container.Sequelize.STRING
//

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
