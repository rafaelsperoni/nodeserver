const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const doc = {
    info: {
        version: "1.0.0",
        title: "API - exemplo",
        description: "API de exemplo com dados de cursos, professores e disciplinas"
    },
    servers: [
        {
            url: 'http://localhost:3000/api'
        }
    ],
    components: {
        schemas: {
            professor: {
                id: 01,
                nome: "Rafael",
                email: "rafael.speroni@...br"
            },
            curso: {
                id: 01,
                nome: "Tecnologia em Sistemas para Internet",
                sigla: "TSI",
                descricao: "...",
                coordenador: 01
            },
        }
    }
}

const outputFile = './swagger-output.json'
const endpointsFile = ['routes/index']

swaggerAutogen(outputFile, endpointsFile, doc).then(() => {
    require('./index')
})