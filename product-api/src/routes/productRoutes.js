// Importing necessary modules
const express = require('express');
const ProductController = require('../controllers/productController');
const validationMiddleware = require('../middlewares/validationMiddleware');

// Creating a router instance
const router = express.Router();

// Creating an instance of the ProductController
const productController = new ProductController();

// Defining routes for product management
// Route to create a new product with validation middleware
router.post('/products', validationMiddleware.validateProductCreation, productController.createProduct);

// Route to get all products
router.get('/products', productController.getAllProducts);

// Route to get a product by ID
router.get('/products/:id', productController.getProductById);

// Route to update a product by ID with validation middleware
router.put('/products/:id', validationMiddleware.validateProductUpdate, productController.updateProduct);

// Route to delete a product by ID
router.delete('/products/:id', productController.deleteProduct);

// Exporting the router to be used in the app
module.exports = router;