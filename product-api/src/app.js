const express = require('express'); // Importing the Express framework
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const productRoutes = require('./routes/productRoutes'); // Importing product routes
const errorHandler = require('./utils/errorHandler'); // Importing error handling middleware

const app = express(); // Creating an instance of an Express application

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Setting up routes for product management
app.use('/api/products', productRoutes());

// Middleware for centralized error handling
app.use(errorHandler);

// Defining the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Logging the server start
});