//Servidor
const express = require("express")
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess} = require("./pages")

//Configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
server
//Receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//Configurar arquivos estáticos (css, scripts, images)
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/success", pageSuccess)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500)

//Como rodar o servidor no terminal: node src/server.js