const router = require('express').Router()
const { raw } = require('express');
const ProfessoresController = require('../controllers/ProfessoresController')

router.get("/", async (req, res)=>{
    /*
        #swagger.tags = ['Professores']
        #swagger.summary = 'Retorna a lista dos professores'
        #swagger.description = 'Este endpoint retorna uma lista dos professores'
    */
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    const professores = await ProfessoresController.getAll()
    res.end(JSON.stringify(professores))
})

router.get("/:id", async (req, res)=>{
    /*
        #swagger.tags = ['Professores']
        #swagger.summary = 'Retorna um professor pelo id'
        #swagger.description = 'Este endpoint retorna os dados de um professor, dado o seu id'
    */
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    const professor = await ProfessoresController.getById(req.params.id)
    res.end(JSON.stringify(professor[0]))
})

router.post("/", async (req, res)=>{
    /*
        #swagger.tags = ['Professores']
        #swagger.summary = 'Insere professor'
        #swagger.description = 'Este endpoint insere um professor'
    */
        res.setHeader('Content-Type', 'application/json');
    res.status(201)
    const professor = await ProfessoresController.insert(req.body)

    res.end(JSON.stringify(professor))
})

router.put("/:id", (req, res)=>{
    /*
        #swagger.tags = ['Professores']
        #swagger.summary = 'Altera os dados de um professor'
        #swagger.description = 'Este endpoint altera os dados de um professor'
    */
        res.setHeader('Content-Type', 'application/json');
    res.status(200)
    const professor = ProfessoresController.update(req.body)
    res.setHeader('Content-Location', professor)
    res.end("Your document can be fetched from "+professor)})

router.delete("/:id", async (req, res)=>{
    /*
        #swagger.tags = ['Professores']
        #swagger.summary = 'Exclui um professor'
        #swagger.description = 'Este endpoint exclui um professor'
    */
        res.setHeader('Content-Type', 'application/json');
    try {
        res.status(204)
        const msg = await ProfessoresController.delete(req.params.id)
        console.log(msg)

        res.end(JSON.stringify(msg))            
    } catch (error) {
        console.error(error)
        res.status(200)
        res.end(JSON.stringify({"message": "Não foi possível excluir"}))
    }
})

module.exports = router