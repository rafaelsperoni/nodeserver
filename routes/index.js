const UsersControllers = require('../controllers/UsersControllers')

const router = require('express').Router()

router.post("/login", async (req, res)=>{
    const {email, senha} = req.body
    const user = await UsersControllers.login(email, senha)
        
    res.send(JSON.stringify(user))
})

router.post("/registro", async(req, res)=>{
    /*
        #swagger.ignore = true
    */
    console.log('body '+req.body)
    const user = {
        nome: req.body.nome, 
        email: req.body.email,
        senha: req.body.senha
    }
    console.log(user)
    const resposta = await UsersControllers.register(user)

    res.send(JSON.stringify(resposta))
})

//rotas com /cursos
router.use('/cursos', require('./cursos'))
//rotas com /disciplinas
router.use('/disciplinas', require('./disciplinas'))
//rotas com /professores
router.use('/professores', require('./professores'))



module.exports = router