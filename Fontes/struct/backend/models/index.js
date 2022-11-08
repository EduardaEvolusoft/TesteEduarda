const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 
const db = {}; 
db.mongoose = mongoose; 

//Declara Usuario
db.usuarios = require("./usuario.model.js")(mongoose); 

//Declara PerfilUsuario
db.perfilsUsuarios = require("./perfilUsuario.model.js")(mongoose); 

//Declara Pergunta
//db.perguntas = require("./pergunta.model.js")(mongoose); 

//Declara Enquete
//db.enquetes = require("./enquete.model.js")(mongoose); 

//Declara EntrevistadorAutorizado
//db.entrevistadoresAutorizados = require("./entrevistadorAutorizado.model.js")(mongoose); 

//Declara EntrevistadoAutorizado
//db.entrevistadosAutorizados = require("./entrevistadoAutorizado.model.js")(mongoose); 

//Declara TipoResposta
//db.tiposRespostas = require("./tipoResposta.model.js")(mongoose); 

//Declara Entrevista
//db.entrevistas = require("./entrevista.model.js")(mongoose); 

//Declara RespostaPergunta
//db.respostasPerguntas = require("./respostaPergunta.model.js")(mongoose); 


module.exports = db;
