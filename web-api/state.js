//api-estados.js
var http = require('http'); 
const express = require('express');
const app = express();
app.use(require("cors")());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

app.get('/estados', (req, res, next) => { 
    console.log("Retornou todos estados!");
    const ufs = [
        {id:1,genero:'Masculino'},{id:2,genero:'Femnino'}
    ]
    res.json(ufs);
    
}) 

var server = http.createServer(app); 
server.listen(5050);
console.log("Servidor escutando na porta 5050...")