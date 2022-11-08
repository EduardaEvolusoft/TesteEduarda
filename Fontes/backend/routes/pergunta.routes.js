module.exports = app => {
    const perguntas = require("../app/controllers/pergunta.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Pergunta 
    router.post("/", perguntas.create); 
    // Retrieve all perguntas 
    router.get("/", perguntas.findAll); 
    // Retrieve a single Pergunta with id 
    router.get("/:id", perguntas.findOne); 
    // Update a Pergunta with id 
    router.put("/:id", perguntas.update); 
    // Delete a Pergunta with id 
    router.delete("/:id", perguntas.delete); 
    // Create a new Pergunta 
    router.delete("/", perguntas.deleteAll); 
    app.use('/api/perguntas', router); 
  }; 
