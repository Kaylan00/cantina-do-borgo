// ================================================================
//  config.js — Configurações do Site
//
//  ✏️  Este é o único arquivo que você precisa editar para
//      personalizar o site para um novo restaurante.
//      Altere os textos, preços, imagens e informações abaixo.
// ================================================================

const SITE = {

  // ── Informações gerais ──────────────────────────────────────
  nome:      'Cantina do Borgo',
  nomePartes: ['Cantina', 'do Borgo'],     // [linha 1, linha 2] do logo
  slogan:    'Cozinha Italiana Autêntica',
  descricao: 'Restaurante italiano com mais de 17 anos de tradição. Pratos autênticos, ingredientes selecionados e ambiente aconchegante.',
  desde:     2008,

  // ── Contato ─────────────────────────────────────────────────
  //  whatsapp: código do país + DDD + número (sem espaços/traços)
  whatsapp:  '5528999087714',
  telefone:  '(28) 99908-7714',
  email:     'reservas@cantinaborgo.com.br',

  // ── Endereço ─────────────────────────────────────────────────
  endereco: {
    rua:    'Rua das Palmeiras, 842',
    bairro: 'Jardim Europa',
    cidade: 'São Paulo – SP',
    cep:    '01454-000',
  },

  // ── Horários ─────────────────────────────────────────────────
  horarios: [
    { dias: 'Segunda – Sexta', horario: '12h – 23h' },
    { dias: 'Sábado',          horario: '12h – 23h' },
    { dias: 'Domingo',         horario: '12h – 17h' },
  ],

  // ── Redes sociais ────────────────────────────────────────────
  redes: {
    instagram: 'https://instagram.com',
    facebook:  'https://facebook.com',
  },

  // ── Imagens principais ───────────────────────────────────────
  imagens: {
    hero:   'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85',
    sobre1: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=750&q=85',
    sobre2: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=450&q=85',
  },

  // ── Seção "Sobre" ────────────────────────────────────────────
  sobre: {
    titulo: 'Uma viagem à Itália em cada prato',
    textos: [
      'A Cantina do Borgo nasceu do sonho de trazer para o Brasil o sabor genuíno das trattorias italianas. Fundada em 2008, nossa cozinha preserva receitas transmitidas de geração em geração, com ingredientes importados e produtores locais selecionados a dedo.',
      'Nossos chefs viajam regularmente à Itália para renovar o cardápio com novas técnicas e inspirações — sempre mantendo a essência da tradição.',
    ],
    stats: [
      { numero: '17+', legenda: 'Anos de história' },
      { numero: '60+', legenda: 'Pratos no cardápio' },
      { numero: '4.9', legenda: 'Avaliação Google' },
    ],
  },

  // ── Diferenciais ─────────────────────────────────────────────
  //  icone: 'leaf' | 'chef' | 'wine' | 'star'
  diferenciais: [
    {
      icone:  'leaf',
      titulo: 'Ingredientes Frescos',
      desc:   'Selecionamos fornecedores locais e importados para garantir qualidade em cada prato, todos os dias.',
    },
    {
      icone:  'chef',
      titulo: 'Chef Italiano',
      desc:   'Nossa equipe foi formada na Itália e traz a autenticidade das melhores regiões gastronômicas europeias.',
    },
    {
      icone:  'wine',
      titulo: 'Adega Selecionada',
      desc:   'Mais de 80 rótulos italianos curados pelo nosso sommelier para harmonizar perfeitamente cada prato.',
    },
    {
      icone:  'star',
      titulo: 'Ambiente Premiado',
      desc:   'Melhor ambiente gastronômico por três anos consecutivos, segundo o Guia Gourmet SP.',
    },
  ],

  // ── Cardápio ─────────────────────────────────────────────────
  //  tag:   null | 'Chef' | 'Favorito' | 'Clássico' | 'Saudável' | 'Assinatura' | 'Novo'
  //  img:   URL da foto — aparece quando o cliente clica no item
  //  preco: número (ex: 24.90)
  cardapio: [
    {
      id:   'entradas',
      nome: 'Entradas',
      itens: [
        {
          nome:  'Bruschetta Classica',
          desc:  'Pão artesanal tostado, tomate confitado, manjericão fresco e azeite extra virgem',
          preco: 24.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=700&q=85',
        },
        {
          nome:  'Bruschetta ao Funghi',
          desc:  'Pão artesanal, mix de cogumelos salteados no azeite, alho, tomilho e parmesão',
          preco: 29.90,
          tag:   'Novo',
          img:   'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=700&q=85',
        },
        {
          nome:  'Carpaccio di Manzo',
          desc:  'Filé mignon cru fatiado, rúcula selvagem, parmesão 24 meses, alcaparras e limão siciliano',
          preco: 52.90,
          tag:   'Chef',
          img:   'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=85',
        },
        {
          nome:  'Salada Caesar',
          desc:  'Alface americana, croutons artesanais, parmesão lascado e molho caesar da casa',
          preco: 34.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=700&q=85',
        },
        {
          nome:  'Salada Caprese',
          desc:  'Tomate heirloom, mozzarella de búfala, manjericão fresco, azeite e flor de sal',
          preco: 42.90,
          tag:   'Favorito',
          img:   'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=85',
        },
        {
          nome:  'Burrata com Tomate',
          desc:  'Burrata fresca importada, tomates heirloom, redução balsâmica e manjericão',
          preco: 48.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=700&q=85',
        },
        {
          nome:  'Minestrone della Casa',
          desc:  'Sopa de legumes da estação com macarrão artesanal, tomate, feijão e parmesão',
          preco: 22.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=85',
        },
        {
          nome:  'Sopa di Cipolla',
          desc:  'Sopa de cebola caramelizada ao vinho branco, crostini e gratinado de gruyère',
          preco: 38.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=85',
        },
        {
          nome:  'Tabla di Formaggi',
          desc:  'Seleção de queijos italianos importados, mel, nozes caramelizadas e geleia de figo',
          preco: 68.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=700&q=85',
        },
      ],
    },
    {
      id:   'principais',
      nome: 'Pratos Principais',
      itens: [
        {
          nome:  'Pollo al Limone',
          desc:  'Frango ao molho de limão siciliano, alcaparras, azeitonas e ervas frescas',
          preco: 48.90,
          tag:   'Novo',
          img:   'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=700&q=85',
        },
        {
          nome:  'Pollo alla Griglia',
          desc:  'Frango grelhado marinado em ervas frescas e limão siciliano, legumes sazonais',
          preco: 62.90,
          tag:   'Saudável',
          img:   'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=700&q=85',
        },
        {
          nome:  'Saltimbocca alla Romana',
          desc:  'Escalopes de vitela, presunto de parma, sálvia fresca e molho de vinho branco',
          preco: 76.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=85',
        },
        {
          nome:  'Filetto alla Griglia',
          desc:  'Filé mignon grelhado ao ponto, molho chimichurri italiano e legumes da estação',
          preco: 89.90,
          tag:   'Favorito',
          img:   'https://images.unsplash.com/photo-1558030006-450675393462?w=700&q=85',
        },
        {
          nome:  'Branzino al Forno',
          desc:  'Robalo assado com ervas mediterrâneas, azeitonas taggiasca e tomates cereja',
          preco: 98.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700&q=85',
        },
        {
          nome:  'Ossobuco alla Milanese',
          desc:  'Jarrete de vitelo braseado, gremolata de limão, acompanha risotto alla milanese',
          preco: 119.90,
          tag:   'Chef',
          img:   'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=85',
        },
        {
          nome:  'Agnello al Rosmarino',
          desc:  'Carré de cordeiro ao alecrim, alho, azeite trufado e batatas rústicas assadas',
          preco: 134.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=700&q=85',
        },
        {
          nome:  'Filetto al Tartufo',
          desc:  'Filé mignon ao molho de trufa negra, purê trufado e aspargos frescos',
          preco: 148.90,
          tag:   'Chef',
          img:   'https://images.unsplash.com/photo-1558030006-450675393462?w=700&q=85',
        },
      ],
    },
    {
      id:   'massas',
      nome: 'Massas & Risotos',
      itens: [
        {
          nome:  'Spaghetti Aglio e Olio',
          desc:  'Massa artesanal, azeite extra virgem, alho dourado, pimenta calabresa e salsinha',
          preco: 38.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=700&q=85',
        },
        {
          nome:  "Penne all'Arrabbiata",
          desc:  'Penne de grano duro, molho pomodoro picante, alho e manjericão',
          preco: 42.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=700&q=85',
        },
        {
          nome:  'Fettuccine al Burro e Salvia',
          desc:  'Fettuccine artesanal, manteiga clarificada, sálvia frita e parmesão curado',
          preco: 52.90,
          tag:   'Novo',
          img:   'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=700&q=85',
        },
        {
          nome:  'Spaghetti Carbonara',
          desc:  'Massa artesanal, guanciale italiano, gema de ovo caipira, pecorino romano e pimenta preta',
          preco: 64.90,
          tag:   'Clássico',
          img:   'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=700&q=85',
        },
        {
          nome:  "Bucatini all'Amatriciana",
          desc:  'Bucatini artesanal, guanciale crocante, pomodoro San Marzano e pecorino',
          preco: 58.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=700&q=85',
        },
        {
          nome:  'Gnocchi al Gorgonzola',
          desc:  'Nhoque de batata artesanal, molho de gorgonzola DOP, peras caramelizadas e nozes',
          preco: 68.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1551183053-bf91798d80ba?w=700&q=85',
        },
        {
          nome:  'Tagliatelle al Ragù Bolognese',
          desc:  'Massa fresca artesanal, ragù cozido por 6 horas, parmesão curado',
          preco: 72.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700&q=85',
        },
        {
          nome:  'Lasagna della Nonna',
          desc:  'Lasanha com massa fresca, ragù lento, bechamel cremoso e parmesão curado',
          preco: 76.90,
          tag:   'Favorito',
          img:   'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=700&q=85',
        },
        {
          nome:  'Risotto ai Funghi Porcini',
          desc:  'Arroz arbório, funghi porcini importado, vinho branco, parmesão e manteiga premium',
          preco: 84.90,
          tag:   'Chef',
          img:   'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=700&q=85',
        },
        {
          nome:  'Risotto ai Gamberi',
          desc:  'Arroz arbório cremoso, camarões selvagens, limão siciliano e manjericão',
          preco: 94.90,
          tag:   'Favorito',
          img:   'https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=700&q=85',
        },
      ],
    },
    {
      id:   'sobremesas',
      nome: 'Sobremesas',
      itens: [
        {
          nome:  'Gelato Artigianale',
          desc:  'Sorvete artesanal preparado diariamente. Sabores: pistache, baunilha, stracciatella',
          preco: 22.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=700&q=85',
        },
        {
          nome:  'Affogato al Caffè',
          desc:  'Gelato de baunilha com espresso quente duplo e farofa de biscoito',
          preco: 26.90,
          tag:   'Novo',
          img:   'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=700&q=85',
        },
        {
          nome:  'Pudim di Latte',
          desc:  'Pudim de leite com calda de caramelo artesanal e flor de sal',
          preco: 28.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=700&q=85',
        },
        {
          nome:  'Panna Cotta',
          desc:  'Creme cozido de baunilha Bourbon com coulis de frutas vermelhas frescas',
          preco: 32.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=85',
        },
        {
          nome:  'Cannoli Siciliani',
          desc:  'Casquinha crocante recheada na hora com ricota siciliana, pistache e laranja confitada',
          preco: 34.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?w=700&q=85',
        },
        {
          nome:  'Torta della Nonna',
          desc:  'Torta de massa frolla com creme de confeiteiro, pinoli e açúcar de confeiteiro',
          preco: 36.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=85',
        },
        {
          nome:  'Tiramisù Classico',
          desc:  'Receita tradicional: mascarpone, espresso forte, ladyfingers e cacau amargo belga',
          preco: 38.90,
          tag:   'Assinatura',
          img:   'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=700&q=85',
        },
      ],
    },
    {
      id:   'bebidas',
      nome: 'Bebidas',
      itens: [
        {
          nome:  'Espresso Napoletano',
          desc:  'Blend exclusivo de arábica, extração em máquina La Marzocco',
          preco: 11.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=700&q=85',
        },
        {
          nome:  'Cappuccino Italiano',
          desc:  'Espresso duplo com leite vaporizado e espuma sedosa, polvilhado com cacau',
          preco: 16.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=85',
        },
        {
          nome:  'Suco Natural',
          desc:  'Laranja, maracujá, abacaxi ou morango — extraído na hora',
          preco: 16.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=700&q=85',
        },
        {
          nome:  'Água San Pellegrino',
          desc:  'Importada, com ou sem gás, 500ml',
          preco: 14.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=700&q=85',
        },
        {
          nome:  'Limonata Siciliana',
          desc:  'Limonada artesanal com limões sicilianos, hortelã e água com gás',
          preco: 18.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&q=85',
        },
        {
          nome:  'Limoncello (dose)',
          desc:  'Licor artesanal preparado com limões sicilianos, servido gelado',
          preco: 24.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1562601579-599dec564e06?w=700&q=85',
        },
        {
          nome:  'Spritz Aperol',
          desc:  'Aperol, Prosecco DOC, água com gás e laranja fresca',
          preco: 34.90,
          tag:   'Favorito',
          img:   'https://images.unsplash.com/photo-1527761939622-933b35c86e62?w=700&q=85',
        },
        {
          nome:  'Vinho Branco da Casa (taça)',
          desc:  'Seleção do sommelier, varia conforme safra disponível',
          preco: 34.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85',
        },
        {
          nome:  'Vinho Tinto da Casa (taça)',
          desc:  'Seleção do sommelier, varia conforme safra disponível',
          preco: 38.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=700&q=85',
        },
        {
          nome:  'Prosecco DOC Valdobbiadene (taça)',
          desc:  'Espumante italiano com perlage fino e persistente',
          preco: 42.90,
          tag:   null,
          img:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85',
        },
      ],
    },
  ],

  // ── Galeria ──────────────────────────────────────────────────
  //  destaque: true  →  foto grande (5 colunas, 2 linhas) — use apenas na 1ª foto
  //  small:    true  →  foto menor (3 colunas) — preenche o espaço lateral
  //
  //  Layout do grid (12 colunas × 3 linhas):
  //  [ destaque·····5 ][ foto·4 ][ small·3 ]   ← linha 1
  //  [ destaque·····5 ][ foto·4 ][ small·3 ]   ← linha 2
  //  [  foto·4  ][  foto·4  ][  foto·4  ]       ← linha 3
  galeria: [
    { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=85', legenda: 'Filetto al Tartufo',  destaque: true },
    { img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=85', legenda: 'Bruschetta Classica' },
    { img: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=85', legenda: 'Detalhes da Cozinha', small: true },
    { img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=600&q=85', legenda: 'Tagliatelle al Ragù' },
    { img: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=85', legenda: 'Mesa & Vinhos',       small: true },
    { img: 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=600&q=85', legenda: 'Risotto ai Funghi' },
    { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85', legenda: 'Nosso Ambiente' },
    { img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=85', legenda: 'Tiramisù Classico' },
  ],

  // ── Depoimentos ──────────────────────────────────────────────
  depoimentos: [
    {
      texto: '"A melhor experiência gastronômica italiana que já tive fora da Itália. O Carpaccio é simplesmente perfeito — ingredientes impecáveis e apresentação linda."',
      nome:  'Marina Ferreira',
      local: 'São Paulo, SP',
    },
    {
      texto: '"O ambiente é incrível — iluminação perfeita, música ao vivo nos fins de semana e atendimento exemplar. O Ossobuco alla Milanese derrete na boca."',
      nome:  'Rafael Andrade',
      local: 'São Paulo, SP',
    },
    {
      texto: '"Fizemos nosso jantar de aniversário aqui e foi mágico. O sommelier fez uma harmonização perfeita e o Tiramisù é impossível de resistir."',
      nome:  'Camila & Pedro Santos',
      local: 'São Paulo, SP',
    },
  ],
};
