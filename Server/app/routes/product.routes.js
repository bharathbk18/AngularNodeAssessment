const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productBK = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productBK.create);
  
    // Retrieve all Tutorials
    router.get("/", productBK.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", productBK.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productBK.findOne);
    // Update a Tutorial with id
    router.put("/:id", productBK.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productBK.delete);
  
    // Delete all Tutorials
    router.delete("/", productBK.deleteAll);
  
    app.use('/api/productBKs', router);
  };