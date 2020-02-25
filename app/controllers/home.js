module.exports.index = function(app,req,res){
  var connection = app.config.dbConnection();
  var noticiasModel = new app.app.models.NoticiasDAO(connection);

  noticiasModel.get5UltimasNoticias(function(error, result){
    // passando parametros para a view da home 

    console.log(result)
    res.render("home/index", {noticias: result});
  });
}