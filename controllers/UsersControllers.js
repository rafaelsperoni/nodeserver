require('dotenv').config
const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
const db = require('../config/db')
const crypto = require('crypto');
const { escape } = require('querystring');


class UsersController{
    async login(email, pass){
        let hashedPassword = crypto.createHash('md5').update(pass).digest('hex')
        const user = await db.query('SELECT id, nome, email FROM usuario where email=$1 and senha=$2', [
            email,
            hashedPassword
        ])
        if (user.rowCount > 0){
            let {id, nome, email} = user.rows[0];
            return {
                    status: "success",
                    message: "Login successful",
                    data: {
                        accessToken: await jwt.sign({
                            userId: id
                        }, process.env.SECRET, {expiresIn: 60*60}),
                        id: id,
                        nome : nome,
                        email: email
                    }
            }
            
        } else {
            return {
                status: "Bad request",
                message: "Authentication failed",
                statusCode: 401
            }
        }
    }

    //demais metodos
    async register(usuario){
        console.log(usuario)
       
        let hashedPassword = crypto.createHash('md5').update(usuario.senha).digest('hex')
        const text = 'INSERT INTO usuario (nome, email, senha) values ($1, $2, $3) returning id'
        const values = [usuario.nome, usuario.email, hashedPassword]

        const res = await db.query(text, values)
        .then(async ()=>{
            const userId = await(await db.query(`SELECT id from usuario where email = $1`, [usuario.email])).rows[0]
            const token = await jwt.sign({
                id: userId.id
            }, process.env.SECRET, {expiresIn: 60*60})
            return {
                status: "success",
                message: "Registro feito com sucesso",
                data: {
                    accessToken: token,
                    user: {
                        id: userId.id,
                        nome: nome,
                        email: email
                    }
                }
            }
        })
        .catch(error => {
            console.log(error)
            return {
                status: "Bad request",
                message:  "Não foi possível efetuar o registro",
                statusCode: 400
            }
        })

    }
}
module.exports = new UsersController()