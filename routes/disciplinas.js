const DisciplinasController = require('../controllers/DisciplinasController');

const router = require('express').Router()

router.get("/", async (req, res)=>{
    /*
        #swagger.tags = ['Disciplinas']
        #swagger.summary = 'Retorna a lista das disciplinas'
        #swagger.description = 'Este endpoint retorna uma lista das discipinas'
    */
        res.setHeader('Content-Type', 'application/json');
        res.status(200)
        const disciplinas = await DisciplinasController.getAll()
        res.end(JSON.stringify(disciplinas))
    
})

router.get("/:id", (req, res)=>{
    /*
        #swagger.tags = ['Disciplinas']
        #swagger.summary = 'Retorna os dados de uma disciplina'
        #swagger.description = 'Este endpoint retorna os dados de uma disciplina, dado o seu id'
    */
        res.send("detalhes de uma disciplina")
})

router.post("/", (req, res)=>{
    /*
        #swagger.tags = ['Disciplinas']
        #swagger.summary = 'Insere disciplina'
        #swagger.description = 'Este endpoint insere uma nova disciplina'
    */
        res.send("criação de uma disciplina")
})

router.put("/:id", (req, res)=>{
    /*
        #swagger.tags = ['Disciplinas']
        #swagger.summary = 'Altera os dados disciplina'
        #swagger.description = 'Este endpoint altera os dados de uma disciplina'
    */
   
        res.send("alteração de uma disciplina")
})

router.delete("/:id", (req, res)=>{
    /*
        #swagger.tags = ['Disciplinas']
        #swagger.summary = 'Exclui disciplina'
        #swagger.description = 'Este endpoint exclui uma disciplina'
    */

    res.send("exclusão de uma disciplina")
})

module.exports = router