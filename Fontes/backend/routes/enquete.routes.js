module.exports = app => {
    const enquetes = require("../app/controllers/enquete.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Enquete 
    router.post("/", enquetes.create); 
    // Retrieve all enquetes 
    router.get("/", enquetes.findAll); 
    // Retrieve a single Enquete with id 
    router.get("/:id", enquetes.findOne); 
    // Update a Enquete with id 
    router.put("/:id", enquetes.update); 
    // Delete a Enquete with id 
    router.delete("/:id", enquetes.delete); 
    // Create a new Enquete 
    router.delete("/", enquetes.deleteAll); 
    app.use('/api/enquetes', router); 
  }; 
