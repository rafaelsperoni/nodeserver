const express = require('express')
const app = express()

app.use(express.json());

//servir arquivos estáticos, na pasta public
app.use(express.static('public'))

app.use('/api', require('./routes'))

const server = app.listen(8081, ()=>{
    console.log('Rodando na porta 8081')
})