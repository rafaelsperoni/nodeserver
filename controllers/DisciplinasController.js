require('dotenv').config
const db = require('../config/db')

class DisciplinasController{
    async getAll(){
        const disciplinas = await db.query('SELECT * FROM disciplina')

        return disciplinas.rows
    }

    async getById(id){
        
        const disciplina = await db.query('SELECT * FROM disciplina WHERE id=$1', [id])
        
        return disciplina.rows[0]
    }

    async insert(disciplina){
         //insert into database
         const text = 'INSERT INTO disciplina (nome, email) values ($1, $2) returning id'
         const values = [professor.nome, professor.email]
 
         const res = await db.query(text, values)
         return {
             message: "Professor inserido com sucesso",
             href: "/professores/"+res.rows[0].id
         }
    }

    update(disciplina){
        return "/api/professores/1"

    }

    async delete(id){
        //insert into database
        const text = 'DELETE FROM disciplina WHERE id=$1'
        const values = [id]
 
        const res = await db.query(text, values)
        return {message: "Disciplina excluído com sucesso"}

    }
}

module.exports = new DisciplinasController()