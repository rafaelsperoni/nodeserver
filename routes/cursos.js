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

router.get("/:id", (req, res)=>{
    res.send("detalhes de um curso")
})

router.post("/", (req, res)=>{
    /*
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
    res.send("criação de um curso")
})

router.put("/:id", (req, res)=>{
    res.send("alteração de um curso")
})

router.delete("/:id", (req, res)=>{
    res.send("exclusão de um curso")
})

module.exports = router