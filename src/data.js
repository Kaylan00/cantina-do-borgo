let pratos = [
  { id: 1, nome: "Frango Grelhado", categoria: "prato principal", preco: 32.9, disponivel: true },
  { id: 2, nome: "Salada Caesar", categoria: "entrada", preco: 18.5, disponivel: true },
  { id: 3, nome: "Pudim de Leite", categoria: "sobremesa", preco: 12.0, disponivel: true },
];

let nextId = 4;

module.exports = { pratos, getNextId: () => nextId++ };
