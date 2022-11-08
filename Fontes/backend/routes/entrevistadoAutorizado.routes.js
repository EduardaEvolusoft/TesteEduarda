module.exports = app => {
    const entrevistadosAutorizados = require("../app/controllers/entrevistadoAutorizado.controller.js"); 
    var router = require("express").Router(); 
    // Create a new EntrevistadoAutorizado 
    router.post("/", entrevistadosAutorizados.create); 
    // Retrieve all entrevistadosAutorizados 
    router.get("/", entrevistadosAutorizados.findAll); 
    // Retrieve a single EntrevistadoAutorizado with id 
    router.get("/:id", entrevistadosAutorizados.findOne); 
    // Update a EntrevistadoAutorizado with id 
    router.put("/:id", entrevistadosAutorizados.update); 
    // Delete a EntrevistadoAutorizado with id 
    router.delete("/:id", entrevistadosAutorizados.delete); 
    // Create a new EntrevistadoAutorizado 
    router.delete("/", entrevistadosAutorizados.deleteAll); 
    app.use('/api/entrevistadosAutorizados', router); 
  }; 
