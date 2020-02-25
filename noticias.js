// lib http
var http = require('http');

// Servidor com NodeJS
var server = http.createServer(function(req, resp){

  var categoria = req.url;

  if(categoria == '/tecnologia'){
    resp.end("<html><body>Notícias de tecnologia</body></html>");
  }else if(categoria == '/moda'){
    resp.end("<html><body>Notícias de Moda</body></html>");
  }else if(categoria == '/beleza'){
    resp.end("<html><body>Notícias de beleza</body></html>");
  }else{
    resp.end("<html><body>Portal de Notícias</body></html>");
  }

});

server.listen(3000);