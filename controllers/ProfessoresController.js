require('dotenv').config
const db = require('../config/db')

class ProfessoresController{
    getAll(){

        const professores =  [
            {id: 1, nome: "Rafael Speroni", email: "rafael...@ifc.edu.br"},
            {id: 2, nome: "Daniel Anderle", email: "daniel...@ifc.edu.br"}
        ]

        return professores
    }

    getById(id){
        let professor
        if (id==1){
            professor = {id: 1, nome: "Rafael Speroni", email: "rafael...@ifc.edu.br"}

        }else{
            professor = {id: 2, nome: "Daniel Anderle", email: "daniel...@ifc.edu.br"}
        }
        return professor
    }

    insert(professor){
         //insert into database
         return "/api/professores/3"
    }

    update(professor){
        return "/api/professores/1"

    }

    delete(id){
        return "Professor apagado"
    }
}

module.exports = new ProfessoresController()