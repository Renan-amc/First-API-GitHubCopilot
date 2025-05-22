// validationMiddleware.js
// This middleware validates incoming requests for product creation and updates.

const { body, validationResult } = require('express-validator');

// Middleware to validate product creation
const validateProductCreation = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('price')
        .isFloat({ gt: 0 })
        .withMessage('Price must be a positive number'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),
    body('category')
        .optional()
        .isString()
        .withMessage('Category must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware to validate product updates
const validateProductUpdate = [
    body('name')
        .optional()
        .isString()
        .withMessage('Name must be a string'),
    body('price')
        .optional()
        .isFloat({ gt: 0 })
        .withMessage('Price must be a positive number'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),
    body('category')
        .optional()
        .isString()
        .withMessage('Category must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Export the validation middleware functions
module.exports = {
    validateProductCreation,
    validateProductUpdate
};