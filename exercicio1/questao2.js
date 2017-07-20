const produtos = [
  {
    id: 1,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 2,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 3,
    preco: 10.0,
    qtd: 2
  },
  {
    id: 4,
    preco: 10.0,
    qtd: 0
  }
]

const maiorQueZero = p => p.qtd > 0
console.log(produtos.filter(maiorQueZero))

const subTotal = p => ({id: p.id, subtotal: p.qtd * p.preco})
console.log(produtos.map(subTotal))

const somaSubTotal = (total, produto) => total + produto.qtd * produto.preco
console.log(produtos.reduce(somaSubTotal, 0))
