const express = require("express");
const cors = require("cors"); 
const app = express();

var corsOptions = { 
  origin: "http://localhost:8081" 
}; 

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jvpiloni:qXEhfh1e4ys4NtMn@mapper.dsepe.mongodb.net/?retryWrites=true&w=majority');

// simple route
app.get("/", (req, res) => { 
  res.json({ message: "Welcome to application." }); 
}); 

//Declara Usuario rotas
require("./routes/usuario.routes")(app); 

//Declara PerfilUsuario rotas
require("./routes/perfilUsuario.routes")(app); 

//Declara Pergunta rotas
require("./routes/pergunta.routes")(app); 

//Declara Enquete rotas
require("./routes/enquete.routes")(app); 

//Declara EntrevistadorAutorizado rotas
require("./routes/entrevistadorAutorizado.routes")(app); 

//Declara EntrevistadoAutorizado rotas
require("./routes/entrevistadoAutorizado.routes")(app); 

//Declara TipoResposta rotas
require("./routes/tipoResposta.routes")(app); 

//Declara Entrevista rotas
require("./routes/entrevista.routes")(app); 

//Declara RespostaPergunta rotas
require("./routes/respostaPergunta.routes")(app); 

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
