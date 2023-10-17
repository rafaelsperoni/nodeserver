const router = require('express').Router()

router.get("/", (req, res)=>{
    res.send("lista de cursos")
})

router.get("/:id", (req, res)=>{
    res.send("detalhes de um curso")
})

router.post("/", (req, res)=>{
    res.send("criação de um curso")
})

router.put("/:id", (req, res)=>{
    res.send("alteração de um curso")
})

router.delete("/:id", (req, res)=>{
    res.send("exclusão de um curso")
})

module.exports = router