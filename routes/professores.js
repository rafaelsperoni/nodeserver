const router = require('express').Router()
const { raw } = require('express');
const ProfessoresController = require('../controllers/ProfessoresController')

router.get("/", async (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    const professores = await ProfessoresController.getAll()
    res.end(JSON.stringify(professores))
})

router.get("/:id", async (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    const professor = await ProfessoresController.getById(req.params.id)
    res.end(JSON.stringify(professor))
})

router.post("/", (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(201)
    const professor = ProfessoresController.insert(req.body)
    res.setHeader('Content-Location', professor)
    const mensagem = {message: "Professor criado. Recurso pode ser acessado em: "+professor}
    res.end(JSON.stringify(mensagem))
})

router.put("/:id", (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    const professor = ProfessoresController.update(req.body)
    res.setHeader('Content-Location', professor)
    res.end("Your document can be fetched from "+professor)})

router.delete("/:id", (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(204)
    const msg = ProfessoresController.delete(req.params.id)
    res.end(msg)
})

module.exports = router