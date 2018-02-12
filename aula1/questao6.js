const express = require('express')
const app = express()

const port = 3000

app.get('/somar', (request, response) => {
  let soma = ''
  if(request.query && request.query.num1 && request.query.num2){
    let num1 = parseFloat(request.query.num1)
    let num2 = parseFloat(request.query.num2)
    soma = `A soma é: ${num1 + num2}`
  }
  response.send(soma)
})

app.listen(port, () => console.log('Server running on '+port))
