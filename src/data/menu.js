const add = (name, price) => ({ name, price });

export const categories = [
  { id: 'hamburgueres', label: 'Hambúrgueres' },
  { id: 'cachorro-quente', label: 'Cachorro-quente' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'pasteis', label: 'Pastéis' },
  { id: 'cuscuz', label: 'Cuscuz' },
  { id: 'tapiocas', label: 'Tapiocas' },
  { id: 'tapiocas-doces', label: 'Tapiocas doces' },
  { id: 'batatas', label: 'Batatas' },
];

export const products = [
  {
    id: 'misto', category: 'hamburgueres', name: 'Misto', price: 7,
    description: 'Pão, queijo e presunto.', removable: [], additions: [],
  },
  {
    id: 'hamburguer', category: 'hamburgueres', name: 'Hambúrguer', price: 8,
    description: 'Pão, carne, alface, tomate, ketchup e maionese.',
    removable: ['alface', 'tomate', 'maionese'], additions: [],
  },
  {
    id: 'x-burguer', category: 'hamburgueres', name: 'X-Burguer', price: 10,
    description: 'Pão, carne, queijo, presunto, alface, tomate, ketchup e maionese.',
    removable: ['alface', 'tomate', 'maionese'], additions: [],
  },
  {
    id: 'x-calabresa', category: 'hamburgueres', name: 'X-Calabresa', price: 12,
    description: 'Pão, carne, calabresa, queijo, milho, alface e tomate.',
    removable: ['milho', 'alface', 'tomate'], additions: [],
  },
  {
    id: 'x-bacon', category: 'hamburgueres', name: 'X-Bacon', price: 14,
    description: 'Pão, carne, queijo, bacon, milho, alface e tomate.',
    removable: ['milho', 'alface', 'tomate'], additions: [],
  },
  {
    id: 'x-frango', category: 'hamburgueres', name: 'X-Frango', price: 13,
    description: 'Pão, frango, alface, milho, queijo e tomate.',
    removable: ['alface', 'milho', 'tomate'], additions: [],
  },
  {
    id: 'x-egg', category: 'hamburgueres', name: 'X-Egg', price: 12,
    description: 'Pão, carne, ovo, queijo, alface e tomate.',
    removable: ['alface', 'tomate'], additions: [],
  },
  {
    id: 'x-tudo', category: 'hamburgueres', name: 'X-Tudo', price: 23,
    description: 'Pão, carne, queijo, presunto, frango, bacon, calabresa, ovo, alface, tomate e milho.',
    removable: ['alface', 'tomate', 'milho'], additions: [],
  },

  {
    id: 'hotdog-simples', category: 'cachorro-quente', name: 'Simples', price: 5,
    description: 'Pão, salsicha, cenoura, ervilha, milho, ketchup e maionese.',
    removable: ['milho', 'maionese'], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'hotdog-duplo', category: 'cachorro-quente', name: 'Duplo', price: 9,
    description: '2 salsichas, molho, milho, ervilha, vinagrete, batata palha, ketchup e maionese.',
    removable: ['milho', 'maionese'], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'hotdog-bacon', category: 'cachorro-quente', name: 'Bacon', price: 10,
    description: 'Salsicha, bacon, milho, ervilha, vinagrete, batata palha, ketchup e maionese.',
    removable: ['milho', 'maionese'], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'hotdog-frango', category: 'cachorro-quente', name: 'Frango', price: 10,
    description: 'Salsicha, frango, milho, ervilha, vinagrete, batata palha, ketchup e maionese.',
    removable: ['milho', 'maionese'], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'hotdog-calabresa', category: 'cachorro-quente', name: 'Calabresa', price: 10,
    description: 'Salsicha, calabresa, milho, ervilha, vinagrete, batata palha, ketchup e maionese.',
    removable: ['milho', 'maionese'], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },

  { id: 'guara-mix', category: 'bebidas', name: 'Guara Mix', price: 2.5, description: '', removable: [], additions: [] },
  { id: 'agua-com-gas', category: 'bebidas', name: 'Água com gás', price: 3, description: '', removable: [], additions: [] },
  { id: 'agua-sem-gas', category: 'bebidas', name: 'Água sem gás', price: 2.5, description: '', removable: [], additions: [] },
  { id: 'tubaina', category: 'bebidas', name: 'Tubaína', price: 4, description: '', removable: [], additions: [] },
  { id: 'goobzinho', category: 'bebidas', name: 'Goobzinho', price: 2.5, description: '', removable: [], additions: [] },
  { id: 'yulo', category: 'bebidas', name: 'Yulo', price: 2.5, description: '', removable: [], additions: [] },
  { id: 'suco-natural', category: 'bebidas', name: 'Suco natural (copo)', price: 3, description: '', removable: [], additions: [] },
  { id: 'refri-1l-pepsi-guarana', category: 'bebidas', name: 'Refrigerante 1L (Pepsi e Guaraná)', price: 8, description: '', removable: [], additions: [] },
  { id: 'refri-1l-goob', category: 'bebidas', name: 'Refrigerante 1L Goob', price: 6, description: '', removable: [], additions: [] },

  {
    id: 'pastel-dueto-classico', category: 'pasteis', name: 'Dueto Clássico', price: 10,
    description: 'Queijo e presunto.', removable: [],
    additions: [add('Catupiry', 3), add('Cheddar', 3), add('Queijo', 4)],
  },
  {
    id: 'pastel-classico-feira', category: 'pasteis', name: 'Clássico da Feira', price: 14,
    description: 'Carne e queijo.', removable: [],
    additions: [add('Catupiry', 3), add('Cheddar', 3), add('Queijo', 4)],
  },
  {
    id: 'pastel-italiano', category: 'pasteis', name: 'Italiano', price: 12,
    description: 'Queijo, presunto, tomate, milho e orégano.', removable: ['tomate', 'milho'],
    additions: [add('Catupiry', 3), add('Cheddar', 3), add('Queijo', 4)],
  },
  {
    id: 'pastel-frango-bacon', category: 'pasteis', name: 'Frango e Bacon', price: 13,
    description: 'Frango e bacon.', removable: [],
    additions: [add('Catupiry', 3), add('Cheddar', 3), add('Queijo', 4)],
  },
  {
    id: 'pastel-pizza', category: 'pasteis', name: 'Pizza', price: 12,
    description: 'Queijo, presunto e cheddar.', removable: [],
    additions: [add('Catupiry', 3), add('Cheddar', 3), add('Queijo', 4)],
  },
  {
    id: 'pastel-calabresa', category: 'pasteis', name: 'Calabresa', price: 10,
    description: 'Calabresa.', removable: [],
    additions: [add('Catupiry', 3), add('Cheddar', 3), add('Queijo', 4)],
  },
  {
    id: 'pastel-frango-queijo', category: 'pasteis', name: 'Frango e Queijo', price: 12,
    description: 'Frango e queijo.', removable: [],
    additions: [add('Catupiry', 3), add('Cheddar', 3), add('Queijo', 4)],
  },
  {
    id: 'pastel-carne', category: 'pasteis', name: 'Carne', price: 12,
    description: 'Carne.', removable: [],
    additions: [add('Catupiry', 3), add('Cheddar', 3), add('Queijo', 4)],
  },

  {
    id: 'cuscuz-tradicional', category: 'cuscuz', name: 'Cuscuz Tradicional', price: 6,
    description: 'Com manteiga.', removable: [], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'cuscuz-raiz', category: 'cuscuz', name: 'Cuscuz Raiz', price: 8,
    description: 'Com ovo.', removable: [], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'cuscuz-fazenda', category: 'cuscuz', name: 'Cuscuz da Fazenda', price: 10,
    description: 'Queijo e frango desfiado.', removable: [], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'cuscuz-nordestino', category: 'cuscuz', name: 'Cuscuz Nordestino', price: 15,
    description: 'Queijo, carne desfiada e banana-da-terra.', removable: [], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'cuscuz-estudante', category: 'cuscuz', name: 'Cuscuz do Estudante', price: 12,
    description: 'Calabresa, ovo e salada.', removable: [], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },

  {
    id: 'tapioca-tradicional', category: 'tapiocas', name: 'Tapioca Tradicional', price: 6,
    description: 'Com manteiga.', removable: [], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'tapioca-fazenda', category: 'tapiocas', name: 'Da Fazenda', price: 14,
    description: 'Queijo e bacon.', removable: [], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'tapioca-roca', category: 'tapiocas', name: 'Da Roça', price: 12,
    description: 'Queijo e calabresa.', removable: [], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  {
    id: 'tapioca-caipira', category: 'tapiocas', name: 'Caipira', price: 13,
    description: 'Frango desfiado e queijo.', removable: [], additions: [add('Cheddar', 2), add('Catupiry', 2)],
  },
  { id: 'romeu-julieta', category: 'tapiocas-doces', name: 'Romeu e Julieta', price: 12, description: 'Queijo e goiabada.', removable: [], additions: [] },
  { id: 'tapioca-nutella', category: 'tapiocas-doces', name: 'Nutella', price: 15, description: '', removable: [], additions: [] },

  {
    id: 'batata-tradicional-pequena', category: 'batatas', name: 'Batata Tradicional — Pequena', price: 9,
    description: 'Porção pequena.', removable: [], additions: [add('Queijo Cheddar', 3), add('Queijo Catupiry', 3), add('Queijo', 4)],
  },
  {
    id: 'batata-tradicional-media', category: 'batatas', name: 'Batata Tradicional — Média', price: 11,
    description: 'Porção média.', removable: [], additions: [add('Queijo Cheddar', 3), add('Queijo Catupiry', 3), add('Queijo', 4)],
  },
  {
    id: 'batata-calabresa-pequena', category: 'batatas', name: 'Batata com Calabresa — Pequena', price: 12,
    description: 'Porção pequena.', removable: [], additions: [add('Queijo Cheddar', 3), add('Queijo Catupiry', 3), add('Queijo', 4)],
  },
  {
    id: 'batata-calabresa-media', category: 'batatas', name: 'Batata com Calabresa — Média', price: 13,
    description: 'Porção média.', removable: [], additions: [add('Queijo Cheddar', 3), add('Queijo Catupiry', 3), add('Queijo', 4)],
  },
  {
    id: 'batata-bacon-pequena', category: 'batatas', name: 'Batata Bacon — Pequena', price: 12,
    description: 'Porção pequena.', removable: [], additions: [add('Queijo Cheddar', 3), add('Queijo Catupiry', 3), add('Queijo', 4)],
  },
  {
    id: 'batata-bacon-media', category: 'batatas', name: 'Batata Bacon — Média', price: 14,
    description: 'Porção média.', removable: [], additions: [add('Queijo Cheddar', 3), add('Queijo Catupiry', 3), add('Queijo', 4)],
  },
];
