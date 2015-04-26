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
  'Attribut': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 46,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 47,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '46',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut1': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 48,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur1': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 49,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '48',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut2': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 50,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur2': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 51,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '50',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut3': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 52,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur3': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 53,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '52',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut4': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 54,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur4': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 55,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '54',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut5': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 56,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur5': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 57,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '56',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut6': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 58,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur6': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 59,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '58',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut7': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 60,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur7': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 61,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '60',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut8': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 62,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur8': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 63,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '62',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut9': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 64,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur9': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 65,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '64',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut10': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 66,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur10': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 67,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '66',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut11': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 68,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur11': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 69,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '68',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut12': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 70,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur12': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 71,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '70',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut13': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 72,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur13': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 73,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '72',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut14': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 74,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur14': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 75,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '74',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut15': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 76,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur15': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 77,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '76',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut16': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 78,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur16': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 79,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '78',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut17': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 80,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur17': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 81,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '80',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut18': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 82,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur18': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 83,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '82',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut19': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 84,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur19': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 85,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '84',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut20': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 86,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur20': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 87,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '86',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut21': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 88,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur21': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 89,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '88',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut22': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 90,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur22': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 91,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '90',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut23': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 92,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur23': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 93,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '92',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut24': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 94,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur24': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 95,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '94',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut25': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 96,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur25': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 97,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '96',
        'function': 'addAttributvaleur'
      } 
    ]
  },
  'Attribut26': {
    'model': Container.model.attribut,
    'fields': [
      {
        'index': 98,
        'fieldName': 'nom'
      }
    ]
  },
  'Attributvaleur26': {
    'model': Container.model.attributvaleur,
    'fields': [
      {
        'index': 99,
        'fieldName': 'nom'
      }
    ],
    'associated': [
      {
        'model': Container.model.attribut,
        'fieldName': 'nom',
        'index': '98',
        'function': 'addAttributvaleur'
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
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '47',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '49',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '51',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '53',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '55',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '57',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '59',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '61',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '63',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '65',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '67',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '69',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '71',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '73',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '75',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '77',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '79',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '81',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '83',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '85',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '87',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '89',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '91',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '93',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '95',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '97',
        'function': 'addArticle'
      },
      {
        'model': Container.model.attributvaleur,
        'fieldName': 'nom',
        'index': '99',
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
