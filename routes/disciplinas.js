const router = require('express').Router()

router.get("/", (req, res)=>{
    res.send("lista de disciplinas")
})

router.get("/:id", (req, res)=>{
    res.send("detalhes de uma disciplina")
})

router.post("/", (req, res)=>{
    res.send("criação de uma disciplina")
})

router.put("/:id", (req, res)=>{
    res.send("alteração de uma disciplina")
})

router.delete("/:id", (req, res)=>{
    res.send("exclusão de uma disciplina")
})

module.exports = router