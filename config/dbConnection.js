var mysql = require('mysql');

var connMySQL = function(){
  console.log('Conexão com o bd foi estabelecida')
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portal_noticias'
  });
}

module.exports = function () {
  console.log('o autoload carregou o módulo de conexão com o bd')
  return connMySQL;
}
