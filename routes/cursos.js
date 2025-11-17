const CursosController = require('../controllers/CursosControllers')
const router = require('express').Router()

router.get("/", async(req, res)=>{
    /*
        #swagger.tags = ['Cursos']
        #swagger.summary = 'Retorna a lista dos cursos'
        #swagger.description = 'Este endpoint retorna uma lista dos cursos'

        #swagger.responses[200] = {
            description: "Lista dos cursos",
            content: {
                "application/json": {
                    schema:{
                        array: {
                            $ref: "#/components/schemas/curso"
                        }
                    }
                }
            }
        }
    */
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    const cursos = await CursosController.getAll()

    res.send(JSON.stringify(cursos))
})

router.get("/:id", async (req, res)=>{
    /*
        #swagger.tags = ['Cursos']
        #swagger.summary = 'Retorna um curso pelo id'
        #swagger.description = 'Este endpoint retorna um curso, dado um id'

        #swagger.responses[200] = {
            description: "Dados do curso",
            content: {
                "application/json": {
                    schema:{
                            $ref: "#/components/schemas/curso"
                    }
                }
            }
        }
    */
        res.setHeader('Content-Type', 'application/json');
    res.status(200)
    const curso = await CursosController.getById(req.params.id)

    res.send(JSON.stringify(curso))

})

router.post("/", async (req, res)=>{
    /*
        #swagger.tags = ['Cursos']
        #swagger.summary = 'Insere um curso'
        #swagger.description = 'Este endpoint insere um novo curso'

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/curso"
                    }
                }
            }
        }
    */
    res.setHeader('Content-Type', 'application/json');
    res.status(201)
    const curso = await CursosController.insert(req.body)
    
    res.end(JSON.stringify(curso))
})

router.put("/:id", (req, res)=>{
    /*
        #swagger.tags = ['Cursos']
        #swagger.summary = 'Altera os dados de um curso'
        #swagger.description = 'Este endpoint altera os dados de um curso'
    
    */
    res.send("alteração de um curso")
})

router.delete("/:id", (req, res)=>{
    /*
        #swagger.tags = ['Cursos']
        #swagger.summary = 'Exclui um curso'
        #swagger.description = 'Este endpoint excluir um curso'    
    */
        res.send("exclusão de um curso")
})

module.exports = router