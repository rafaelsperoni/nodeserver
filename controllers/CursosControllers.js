require('dotenv').config
const db = require('../config/db')

class CursosController{
    async getAll(){

        const cursos = await db.query('SELECT * FROM cursos')

        return cursos.rows
    }

    //demais metodos
}
module.exports = new CursosController()