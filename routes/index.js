const router = require('express').Router()

//rotas com /cursos
router.use('/cursos', require('./cursos'))
//rotas com /disciplinas
router.use('/disciplinas', require('./disciplinas'))
//rotas com /professores
router.use('/professores', require('./professores'))

module.exports = router