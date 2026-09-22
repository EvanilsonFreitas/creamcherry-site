// Dados preservados do cardápio existente. Embalagens e disponibilidade devem ser confirmadas antes do cadastro.
const CATALOG_CATEGORIES = [
  {
    "id": "sorvetes",
    "name": "Sorvetes",
    "subcategories": [
      {
        "id": "caixas",
        "name": "Caixas",
        "presentations": [
          "5 L",
          "10 L"
        ]
      },
      {
        "id": "potes",
        "name": "Potes",
        "presentations": [
          "200 ml",
          "380 ml"
        ]
      },
      {
        "id": "picoles",
        "name": "Picolés",
        "lines": [
          "Tradicionais",
          "Cremosos",
          "Frutas"
        ]
      },
      {
        "id": "copos",
        "name": "Copos"
      },
      {
        "id": "sabores",
        "name": "Sabores do cardápio"
      }
    ]
  },
  {
    "id": "acai",
    "name": "Açaí",
    "subcategories": [
      {
        "id": "caixas",
        "name": "Caixas",
        "presentations": [
          "5 L",
          "10 L"
        ]
      },
      {
        "id": "potes",
        "name": "Potes",
        "presentations": [
          "200 ml",
          "380 ml"
        ]
      },
      {
        "id": "copos",
        "name": "Copos"
      },
      {
        "id": "sabores",
        "name": "Sabores do cardápio"
      }
    ]
  },
  {
    "id": "complementos",
    "name": "Complementos",
    "subcategories": [
      {
        "id": "casquinhas",
        "name": "Casquinhas"
      },
      {
        "id": "cascoes",
        "name": "Cascões"
      },
      {
        "id": "bijus",
        "name": "Bijus"
      },
      {
        "id": "caixas-biju",
        "name": "Caixas de biju"
      },
      {
        "id": "coberturas",
        "name": "Coberturas",
        "brands": [
          "Marvi"
        ]
      },
      {
        "id": "acompanhamentos",
        "name": "Acompanhamentos"
      }
    ]
  }
];
const CATALOGO = [
  {
    "id": "baunilha",
    "cat": "tradicionais",
    "emoji": "🍦",
    "name": "Baunilha Clássica",
    "desc": "A rainha dos sorvetes. Produzida com fava de baunilha Bourbon importada, creme de leite fresco e açúcar de cana. Textura aveludada e sabor limpo que agrada todos os paladares.",
    "price": "R$ 12,90",
    "photo": "images/produtos/sorvetes/sabores/baunilha.jpg",
    "porcao": "120ml",
    "calorias": "210 kcal",
    "alergenos": [
      "leite",
      "ovos"
    ],
    "ingredientes": [
      "leite integral",
      "creme de leite",
      "açúcar de cana",
      "fava de baunilha Bourbon",
      "gema de ovo"
    ],
    "nutricao": [
      [
        "Valor energético",
        "210 kcal",
        "11%"
      ],
      [
        "Carboidratos",
        "24g",
        "8%"
      ],
      [
        "Açúcares",
        "21g",
        "—"
      ],
      [
        "Proteínas",
        "4g",
        "5%"
      ],
      [
        "Gorduras totais",
        "10g",
        "14%"
      ],
      [
        "Gorduras saturadas",
        "6g",
        "27%"
      ],
      [
        "Sódio",
        "65mg",
        "3%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Baunilha Clássica",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 1
  },
  {
    "id": "chocolate",
    "cat": "tradicionais",
    "emoji": "🍫",
    "name": "Chocolate Belga",
    "desc": "Cacau 70% importado da Bélgica, processado a frio para preservar os aromas. Intenso, encorpado e incrivelmente cremoso. Para os verdadeiros amantes de chocolate.",
    "price": "R$ 14,90",
    "photo": "images/produtos/sorvetes/sabores/chocolate-belga.jpg",
    "porcao": "120ml",
    "calorias": "240 kcal",
    "alergenos": [
      "leite",
      "soja"
    ],
    "ingredientes": [
      "leite integral",
      "creme de leite",
      "cacau 70% Belga",
      "açúcar de cana",
      "manteiga de cacau",
      "lecitina de soja"
    ],
    "nutricao": [
      [
        "Valor energético",
        "240 kcal",
        "12%"
      ],
      [
        "Carboidratos",
        "26g",
        "9%"
      ],
      [
        "Açúcares",
        "22g",
        "—"
      ],
      [
        "Proteínas",
        "5g",
        "7%"
      ],
      [
        "Gorduras totais",
        "13g",
        "18%"
      ],
      [
        "Gorduras saturadas",
        "8g",
        "36%"
      ],
      [
        "Sódio",
        "70mg",
        "3%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Chocolate Belga",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 2
  },
  {
    "id": "morango",
    "cat": "tradicionais",
    "emoji": "🍓",
    "name": "Morango Fresco",
    "desc": "Morangos selecionados da Região Serrana de SP, colhidos na estação. Cor vibrante, aroma natural e sabor equilibrado entre o doce e o ácido. Sem corantes artificiais.",
    "price": "R$ 13,90",
    "photo": "images/produtos/sorvetes/sabores/morango-ilustrativo.jpg",
    "porcao": "120ml",
    "calorias": "180 kcal",
    "alergenos": [
      "leite"
    ],
    "ingredientes": [
      "leite integral",
      "morango fresco",
      "açúcar de cana",
      "creme de leite",
      "pectina natural"
    ],
    "nutricao": [
      [
        "Valor energético",
        "180 kcal",
        "9%"
      ],
      [
        "Carboidratos",
        "22g",
        "7%"
      ],
      [
        "Açúcares",
        "18g",
        "—"
      ],
      [
        "Proteínas",
        "3g",
        "4%"
      ],
      [
        "Gorduras totais",
        "8g",
        "11%"
      ],
      [
        "Gorduras saturadas",
        "5g",
        "23%"
      ],
      [
        "Sódio",
        "50mg",
        "2%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Morango Fresco",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 3,
    "illustrative": true
  },
  {
    "id": "amendoim",
    "cat": "tradicionais",
    "emoji": "🥜",
    "name": "Crocante de Amendoim",
    "desc": "Pasta de amendoim artesanal misturada ao creme base, com pedaços de amendoim tostado ao mel. Textura cremosa e crocante ao mesmo tempo, viciante.",
    "price": "R$ 15,90",
    "photo": "",
    "porcao": "120ml",
    "calorias": "280 kcal",
    "alergenos": [
      "leite",
      "amendoim"
    ],
    "ingredientes": [
      "leite integral",
      "pasta de amendoim",
      "amendoim tostado ao mel",
      "creme de leite",
      "açúcar de cana",
      "mel"
    ],
    "nutricao": [
      [
        "Valor energético",
        "280 kcal",
        "14%"
      ],
      [
        "Carboidratos",
        "20g",
        "7%"
      ],
      [
        "Gorduras totais",
        "18g",
        "25%"
      ],
      [
        "Proteínas",
        "8g",
        "11%"
      ],
      [
        "Sódio",
        "80mg",
        "3%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Crocante de Amendoim",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 4
  },
  {
    "id": "limao",
    "cat": "tradicionais",
    "emoji": "🍋",
    "name": "Limão Siciliano",
    "desc": "Suco e raspas de limão siciliano orgânico diretamente no creme. Refrescante, levemente ácido e com aroma cítrico marcante. Perfeito para dias quentes.",
    "price": "R$ 13,90",
    "photo": "",
    "porcao": "120ml",
    "calorias": "175 kcal",
    "alergenos": [
      "leite"
    ],
    "ingredientes": [
      "leite integral",
      "suco de limão siciliano",
      "raspas de limão siciliano",
      "açúcar de cana",
      "creme de leite"
    ],
    "nutricao": [
      [
        "Valor energético",
        "175 kcal",
        "9%"
      ],
      [
        "Carboidratos",
        "24g",
        "8%"
      ],
      [
        "Gorduras totais",
        "7g",
        "10%"
      ],
      [
        "Proteínas",
        "3g",
        "4%"
      ],
      [
        "Sódio",
        "45mg",
        "2%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Limão Siciliano",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 5
  },
  {
    "id": "cherry_cc",
    "cat": "especiais",
    "emoji": "🍒",
    "name": "Cherry Cheesecake",
    "desc": "Cream cheese Philadelphia, calda de cereja ácida e base de biscoito Oreo triturado. Uma sobremesa completa em cada copo. Textura densa e sabor equilibrado.",
    "price": "R$ 18,90",
    "photo": "",
    "porcao": "120ml",
    "calorias": "310 kcal",
    "alergenos": [
      "leite",
      "trigo",
      "ovos"
    ],
    "ingredientes": [
      "cream cheese",
      "creme de leite",
      "calda de cereja",
      "biscoito recheado",
      "açúcar",
      "leite condensado",
      "baunilha"
    ],
    "nutricao": [
      [
        "Valor energético",
        "310 kcal",
        "16%"
      ],
      [
        "Carboidratos",
        "30g",
        "10%"
      ],
      [
        "Açúcares",
        "25g",
        "—"
      ],
      [
        "Proteínas",
        "6g",
        "8%"
      ],
      [
        "Gorduras totais",
        "18g",
        "25%"
      ],
      [
        "Sódio",
        "140mg",
        "6%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Cherry Cheesecake",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 6
  },
  {
    "id": "pistache",
    "cat": "especiais",
    "emoji": "🫚",
    "name": "Pistache Italiano",
    "desc": "Pasta de pistache siciliano importada da Bronte (Sicília), a capital mundial do pistache. Sabor intenso, cor natural verde-esmeralda. Sem corantes.",
    "price": "R$ 22,90",
    "photo": "",
    "porcao": "120ml",
    "calorias": "290 kcal",
    "alergenos": [
      "leite",
      "pistache"
    ],
    "ingredientes": [
      "leite integral",
      "pasta de pistache siciliano (Bronte)",
      "creme de leite",
      "açúcar de cana",
      "pistache granulado"
    ],
    "nutricao": [
      [
        "Valor energético",
        "290 kcal",
        "15%"
      ],
      [
        "Carboidratos",
        "18g",
        "6%"
      ],
      [
        "Gorduras totais",
        "20g",
        "28%"
      ],
      [
        "Proteínas",
        "7g",
        "9%"
      ],
      [
        "Sódio",
        "60mg",
        "3%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Pistache Italiano",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 7
  },
  {
    "id": "nutella",
    "cat": "especiais",
    "emoji": "🍫",
    "name": "Nutella Trufado",
    "desc": "Creme de avelã Ferrero misturado ao creme base com pedaços de trufa de chocolate belga 70%. Duas camadas de prazer, cremoso e crocante ao mesmo tempo.",
    "price": "R$ 19,90",
    "photo": "",
    "porcao": "120ml",
    "calorias": "320 kcal",
    "alergenos": [
      "leite",
      "avelã",
      "soja",
      "trigo"
    ],
    "ingredientes": [
      "creme de leite",
      "Nutella Ferrero",
      "trufa de chocolate 70%",
      "leite integral",
      "avelã tostada",
      "açúcar"
    ],
    "nutricao": [
      [
        "Valor energético",
        "320 kcal",
        "16%"
      ],
      [
        "Carboidratos",
        "28g",
        "9%"
      ],
      [
        "Gorduras totais",
        "20g",
        "28%"
      ],
      [
        "Proteínas",
        "5g",
        "7%"
      ],
      [
        "Sódio",
        "90mg",
        "4%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Nutella Trufado",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 8
  },
  {
    "id": "tiramisu",
    "cat": "especiais",
    "emoji": "☕",
    "name": "Tiramisù",
    "desc": "Receita inspirada no clássico italiano: mascarpone fresco, espresso duplo, cacau em pó e biscoito savoiardi. Sofisticado, cremoso e com toque de amargor.",
    "price": "R$ 21,90",
    "photo": "",
    "porcao": "120ml",
    "calorias": "300 kcal",
    "alergenos": [
      "leite",
      "ovos",
      "trigo",
      "glúten"
    ],
    "ingredientes": [
      "mascarpone",
      "espresso",
      "biscoito savoiardi",
      "gema de ovo",
      "açúcar mascavo",
      "cacau em pó",
      "creme de leite"
    ],
    "nutricao": [
      [
        "Valor energético",
        "300 kcal",
        "15%"
      ],
      [
        "Carboidratos",
        "22g",
        "7%"
      ],
      [
        "Gorduras totais",
        "19g",
        "27%"
      ],
      [
        "Proteínas",
        "6g",
        "8%"
      ],
      [
        "Sódio",
        "80mg",
        "3%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Tiramisù",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 9
  },
  {
    "id": "coco_mara",
    "cat": "veganos",
    "emoji": "🥥",
    "name": "Coco & Maracujá",
    "desc": "Base cremosa de leite de coco orgânico com polpa de maracujá fresco. Zero lactose, zero ovos, 100% vegano. Tropical, refrescante e surpreendentemente cremoso.",
    "price": "R$ 15,90",
    "photo": "",
    "porcao": "120ml",
    "calorias": "190 kcal",
    "alergenos": [],
    "ingredientes": [
      "leite de coco orgânico",
      "polpa de maracujá fresco",
      "açúcar de cana",
      "óleo de coco",
      "amido de arroz"
    ],
    "nutricao": [
      [
        "Valor energético",
        "190 kcal",
        "10%"
      ],
      [
        "Carboidratos",
        "20g",
        "7%"
      ],
      [
        "Gorduras totais",
        "12g",
        "17%"
      ],
      [
        "Proteínas",
        "2g",
        "3%"
      ],
      [
        "Sódio",
        "30mg",
        "1%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Coco & Maracujá",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 10
  },
  {
    "id": "acai",
    "cat": "veganos",
    "emoji": "🫐",
    "name": "Açaí Power",
    "desc": "Açaí amazônico orgânico em base de banana congelada, finalizado com granola artesanal e calda de mel vegano. Rico em antioxidantes e energia natural.",
    "price": "R$ 16,90",
    "photo": "",
    "porcao": "120ml",
    "calorias": "220 kcal",
    "alergenos": [
      "aveia"
    ],
    "ingredientes": [
      "açaí amazônico orgânico",
      "banana",
      "granola artesanal (aveia, mel vegano, castanha)",
      "mel vegano",
      "coco ralado"
    ],
    "nutricao": [
      [
        "Valor energético",
        "220 kcal",
        "11%"
      ],
      [
        "Carboidratos",
        "28g",
        "9%"
      ],
      [
        "Gorduras totais",
        "9g",
        "13%"
      ],
      [
        "Proteínas",
        "4g",
        "5%"
      ],
      [
        "Sódio",
        "20mg",
        "1%"
      ]
    ],
    "category": "acai",
    "subcategory": "sabores",
    "flavor": "Açaí Power",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 11
  },
  {
    "id": "matcha",
    "cat": "veganos",
    "emoji": "🌿",
    "name": "Matcha & Limão",
    "desc": "Chá matcha cerimonial japonês grau A com raspas de limão siciliano em base de leite de amêndoa. Sabor complexo, levemente amargo e refrescante. Sem lactose.",
    "price": "R$ 17,90",
    "photo": "",
    "porcao": "120ml",
    "calorias": "185 kcal",
    "alergenos": [
      "amêndoa"
    ],
    "ingredientes": [
      "leite de amêndoa",
      "matcha cerimonial grau A",
      "raspas de limão siciliano",
      "agave",
      "amido de arroz"
    ],
    "nutricao": [
      [
        "Valor energético",
        "185 kcal",
        "9%"
      ],
      [
        "Carboidratos",
        "19g",
        "6%"
      ],
      [
        "Gorduras totais",
        "10g",
        "14%"
      ],
      [
        "Proteínas",
        "3g",
        "4%"
      ],
      [
        "Sódio",
        "25mg",
        "1%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Matcha & Limão",
    "volume": 120,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 12
  },
  {
    "id": "gel_cereja",
    "cat": "gelattos",
    "emoji": "🍒",
    "name": "Gelatto Cereja",
    "desc": "Gelatto alla ciliegia no estilo siciliano. Cerejas ácidas do Mediterrâneo, técnica de churning lento para máxima cremosidade e menos ar. Cor intensa, sabor profundo.",
    "price": "R$ 16,90",
    "photo": "",
    "porcao": "100ml",
    "calorias": "200 kcal",
    "alergenos": [
      "leite"
    ],
    "ingredientes": [
      "leite integral",
      "cereja mediterrânea",
      "açúcar de cana",
      "creme de leite",
      "leite em pó"
    ],
    "nutricao": [
      [
        "Valor energético",
        "200 kcal",
        "10%"
      ],
      [
        "Carboidratos",
        "25g",
        "8%"
      ],
      [
        "Gorduras totais",
        "9g",
        "13%"
      ],
      [
        "Proteínas",
        "4g",
        "5%"
      ],
      [
        "Sódio",
        "55mg",
        "2%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Gelatto Cereja",
    "volume": 100,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 13
  },
  {
    "id": "gel_pist",
    "cat": "gelattos",
    "emoji": "🫚",
    "name": "Gelatto Pistacchio",
    "desc": "O rey dos gelattos. Pasta de pistache IGP da Sicília (Bronte), textura densa e sabor que remete diretamente às gelaterias de Palermo. Produção limitada.",
    "price": "R$ 24,90",
    "photo": "",
    "porcao": "100ml",
    "calorias": "270 kcal",
    "alergenos": [
      "leite",
      "pistache"
    ],
    "ingredientes": [
      "leite integral",
      "pasta pistache IGP Bronte",
      "creme de leite",
      "açúcar de cana",
      "pistache granulado"
    ],
    "nutricao": [
      [
        "Valor energético",
        "270 kcal",
        "14%"
      ],
      [
        "Carboidratos",
        "16g",
        "5%"
      ],
      [
        "Gorduras totais",
        "18g",
        "25%"
      ],
      [
        "Proteínas",
        "7g",
        "9%"
      ],
      [
        "Sódio",
        "50mg",
        "2%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Gelatto Pistacchio",
    "volume": 100,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 14
  },
  {
    "id": "gel_ciocco",
    "cat": "gelattos",
    "emoji": "🍫",
    "name": "Gelatto Cioccolato Nero",
    "desc": "Chocolate negro 72% de origem única (Costa do Marfim) processado com técnica italiana de churning lento. Amargo e suave ao mesmo tempo, para gourmets de chocolate.",
    "price": "R$ 18,90",
    "photo": "",
    "porcao": "100ml",
    "calorias": "250 kcal",
    "alergenos": [
      "leite",
      "soja"
    ],
    "ingredientes": [
      "leite integral",
      "cacau negro 72% Costa do Marfim",
      "açúcar de cana",
      "creme de leite",
      "lecitina de soja"
    ],
    "nutricao": [
      [
        "Valor energético",
        "250 kcal",
        "13%"
      ],
      [
        "Carboidratos",
        "20g",
        "7%"
      ],
      [
        "Gorduras totais",
        "15g",
        "21%"
      ],
      [
        "Proteínas",
        "5g",
        "7%"
      ],
      [
        "Sódio",
        "60mg",
        "3%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Gelatto Cioccolato Nero",
    "volume": 100,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 15
  },
  {
    "id": "fiordi",
    "cat": "gelattos",
    "emoji": "🍦",
    "name": "Gelatto Fiordilatte",
    "desc": "O gelatto mais puro e honesto. Apenas leite fresco, creme e açúcar, sem baunilha, sem adicionais. Quem ama verdadeiramente sabe que o sabor do leite de qualidade é perfeito sozinho.",
    "price": "R$ 15,90",
    "photo": "",
    "porcao": "100ml",
    "calorias": "185 kcal",
    "alergenos": [
      "leite"
    ],
    "ingredientes": [
      "leite integral fresco",
      "creme de leite fresco",
      "açúcar de cana",
      "leite em pó"
    ],
    "nutricao": [
      [
        "Valor energético",
        "185 kcal",
        "9%"
      ],
      [
        "Carboidratos",
        "17g",
        "6%"
      ],
      [
        "Gorduras totais",
        "11g",
        "15%"
      ],
      [
        "Proteínas",
        "4g",
        "6%"
      ],
      [
        "Sódio",
        "50mg",
        "2%"
      ]
    ],
    "category": "sorvetes",
    "subcategory": "sabores",
    "flavor": "Gelatto Fiordilatte",
    "volume": 100,
    "unit": "ml",
    "images": [],
    "availability": "consultar",
    "order": 16
  }
];
