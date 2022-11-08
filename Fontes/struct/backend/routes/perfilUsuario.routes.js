module.exports = app => {
    const perfilsUsuarios = require("../app/controllers/perfilUsuario.controller.js"); 
    var router = require("express").Router(); 
    // Create a new PerfilUsuario 
    router.post("/", perfilsUsuarios.create); 
    // Retrieve all perfilsUsuarios 
    router.get("/", perfilsUsuarios.findAll); 
    // Retrieve a single PerfilUsuario with id 
    router.get("/:id", perfilsUsuarios.findOne); 
    // Update a PerfilUsuario with id 
    router.put("/:id", perfilsUsuarios.update); 
    // Delete a PerfilUsuario with id 
    router.delete("/:id", perfilsUsuarios.delete); 
    // Create a new PerfilUsuario 
    router.delete("/", perfilsUsuarios.deleteAll); 
    app.use('/api/perfilsUsuarios', router); 
  }; 
