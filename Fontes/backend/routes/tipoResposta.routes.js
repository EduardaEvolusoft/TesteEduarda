module.exports = app => {
    const tiposRespostas = require("../app/controllers/tipoResposta.controller.js"); 
    var router = require("express").Router(); 
    // Create a new TipoResposta 
    router.post("/", tiposRespostas.create); 
    // Retrieve all tiposRespostas 
    router.get("/", tiposRespostas.findAll); 
    // Retrieve a single TipoResposta with id 
    router.get("/:id", tiposRespostas.findOne); 
    // Update a TipoResposta with id 
    router.put("/:id", tiposRespostas.update); 
    // Delete a TipoResposta with id 
    router.delete("/:id", tiposRespostas.delete); 
    // Create a new TipoResposta 
    router.delete("/", tiposRespostas.deleteAll); 
    app.use('/api/tiposRespostas', router); 
  }; 
