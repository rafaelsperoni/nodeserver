const {Pool} = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})
pool.on('connect', ()=>{
    console.log('DB connected')
})
pool.on('error', (err) =>{
    console.error(err)
})


module.exports = {
    query: (text, params) => pool.query(text, params)
}