var mysql = require('mysql');

var connMySQL = function(){
  console.log('Conexão com o bd foi estabelecida')
  return mysql.createConnection({
    host: 'sql112.main-hosting.eu',
    user: 'u278220119_frontlks',
    password: 'fr0nt3nd2019',
    database: 'u278220119_portalnoticias'
  });
}

module.exports = function () {
  console.log('o autoload carregou o módulo de conexão com o bd')
  return connMySQL;
}
