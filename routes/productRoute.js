const express = require('express');
const app  = express.Router() ;
const productController = require('../controllers/productController');


app.get("/",productController.getProducts);

app.get("/:id",productController.getProductById);

app.get("/:name/name",productController.getProductByName);

app.get("/",productController.getProductByPrice);

app.post("/:id",productController.postProductById);

app.put("/:id",productController.putProductById);

app.patch("/:id",productController.patchProductById);
    
app.delete("/:id",productController.deleteProductById);

module.exports = app ;