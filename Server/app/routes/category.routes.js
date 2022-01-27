
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryBK=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryBK.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryBK.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", categoryBK.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryBK.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryBK.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryBK.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryBK.deleteAll);
  
    app.use('/api/categoryBKs', router);
  };