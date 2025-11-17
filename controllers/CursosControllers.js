require('dotenv').config
const db = require('../config/db')

class CursosController{
    async getAll(){

        const cursos = await db.query('SELECT * FROM cursos')

        return cursos.rows
    }
    async getById(id){
        const text = 'SELECT * FROM cursos WHERE id=$1'
        const values = [id]
        const curso = await db.query(text, values)

        return curso.rows[0]
    
    }

    async insert(curso){
         //insert into database
         const text = 'INSERT INTO cursos (nome, sigla, descricao, id_coordenador) values ($1, $2, $3, $4) returning id'
         const values = [curso.nome, curso.sigla, curso.descricao, curso.id_coordenador]
 
         const res = await db.query(text, values)
         return {
             message: "Curso inserido com sucesso",
             href: "/cursos/"+res.rows[0].id
         }        
    }
    //demais metodos
}
module.exports = new CursosController()