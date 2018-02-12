const produtos = [
  {
    nome: 'Bicicleta',
    preco: 1200.0
  },
  {
    nome: 'Capacete',
    preco: 450.0
  }
]

let total = produtos.reduce((total, produto) => total + produto.preco, 0)
console.log(total)
