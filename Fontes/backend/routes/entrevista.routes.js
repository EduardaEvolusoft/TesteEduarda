module.exports = app => {
    const entrevistas = require("../app/controllers/entrevista.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Entrevista 
    router.post("/", entrevistas.create); 
    // Retrieve all entrevistas 
    router.get("/", entrevistas.findAll); 
    // Retrieve a single Entrevista with id 
    router.get("/:id", entrevistas.findOne); 
    // Update a Entrevista with id 
    router.put("/:id", entrevistas.update); 
    // Delete a Entrevista with id 
    router.delete("/:id", entrevistas.delete); 
    // Create a new Entrevista 
    router.delete("/", entrevistas.deleteAll); 
    app.use('/api/entrevistas', router); 
  }; 
