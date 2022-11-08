module.exports = app => {
    const entrevistadoresAutorizados = require("../app/controllers/entrevistadorAutorizado.controller.js"); 
    var router = require("express").Router(); 
    // Create a new EntrevistadorAutorizado 
    router.post("/", entrevistadoresAutorizados.create); 
    // Retrieve all entrevistadoresAutorizados 
    router.get("/", entrevistadoresAutorizados.findAll); 
    // Retrieve a single EntrevistadorAutorizado with id 
    router.get("/:id", entrevistadoresAutorizados.findOne); 
    // Update a EntrevistadorAutorizado with id 
    router.put("/:id", entrevistadoresAutorizados.update); 
    // Delete a EntrevistadorAutorizado with id 
    router.delete("/:id", entrevistadoresAutorizados.delete); 
    // Create a new EntrevistadorAutorizado 
    router.delete("/", entrevistadoresAutorizados.deleteAll); 
    app.use('/api/entrevistadoresAutorizados', router); 
  }; 
