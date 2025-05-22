// This file contains a centralized error handling function for the application.
// It captures errors and sends a consistent response format to the client.

const errorHandler = (err, req, res, next) => {
    // Log the error details for debugging purposes
    console.error(err.stack);

    // Set the response status code based on the error type
    const statusCode = err.statusCode || 500;

    // Send the error response to the client
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

module.exports = errorHandler;