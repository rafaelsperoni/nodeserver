const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
    const reqUrl = url.parse(req.url).pathname
    if (req.method == "GET"){
        if(reqUrl == "/"){  //rota raiz
            fs.readFile('public/index.html', (err, data)=>{
                res.writeHead(200, {'Content-type':'text/html'})
                res.write(data)
                res.end()    
            })
        }else if(reqUrl == "/sobre"){  //rota sobre
            res.writeHead(200, {'Content-type':'text/html'})
            res.end('Sobre - Criado por Rafael')
        }else{ //qualquer outra coisa
            res.writeHead(404, {'Content-type':'text/html'})
            res.end('Not Found')

        }    
    }
}).listen(8081)

console.log('Servidor rodando na porta 8081')