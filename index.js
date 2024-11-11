require('dotenv').config

const jwt = require('jsonwebtoken')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
const express = require('express')
const app = express()

app.use(express.json());

function generateAccessToken(user){
    return jwt.sign(user, 'qualquer_coisa', {expiresIn: '15m'})
}


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//servir arquivos estáticos, na pasta public
app.use(express.static('public'))

app.use('/api', require('./routes'))


const server = app.listen(process.env.PORT, ()=>{
    console.log('Rodando na porta '+process.env.PORT)
})