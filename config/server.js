var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
// var msg = require('./mod_teste');

// executando a funcao contida na var express
var app = express();
// indicando qual vai ser o motor de geracao de views
app.set('view engine', 'ejs');
app.set('views', './app/views');

// permite o parse de conexoes no formato json 
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// reconhecendo todos arquivos da pasta routes e inclui dentro do servidor
consign()
  .include('app/routes')
  .then('config/dbConnection.js') //  chamando o modulo de conexao com extensão se não entenderia que seria um diretorio
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;