require('dotenv').config

const express = require('express')
const app = express()

app.use(express.json());

//servir arquivos estáticos, na pasta public
app.use(express.static('public'))

app.use('/api', require('./routes'))


const server = app.listen(process.env.PORT, ()=>{
    console.log('Rodando na porta '+process.env.PORT)
})