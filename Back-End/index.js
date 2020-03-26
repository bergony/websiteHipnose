const express = require("express");
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');


const app = express();
// config
  // Conexao com BD Mysql
    const sequelize = new Sequelize('sistemadecadastro', 'root', '3b1mcasaXX', {
      host: "localhost",
      dialect: 'mysql'
    });
  sequelize.authenticate().then( function(){
    console.log("Conetado com sucesso");
  } ).catch( function(err){
    console.log("Falha ao se connectar :"+err)
  })
  //body-parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
  // Rota
    app.use(express.static('../Front-End/src'));
    app.get('/', function(request, response) {
      response.sendFile('index.html', {root: '../Front-End/src'});
    })

    app.post('/r', function(request, response) {
        // TODO: Encontra uma formar de tiar info do fumulario.
      response.send("text text");
    })

app.listen(8081, function(){
  console.log("Servidor Rodando na url http://localhost:8081");
});
//Localhost:portal"