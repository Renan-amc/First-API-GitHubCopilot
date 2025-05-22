# Product API

This is a RESTful API for managing products. It allows users to create, read, update, and delete product entries. The API is built using Node.js and Express.

## Features

- Create, read, update, and delete products
- Input validation for product creation and updates
- Centralized error handling

## Project Structure

```
product-api
├── src
│   ├── app.js                  # Entry point of the application
│   ├── controllers             # Contains the product controller
│   │   └── productController.js
│   ├── routes                  # Defines the API routes
│   │   └── productRoutes.js
│   ├── models                  # Contains the product model
│   │   └── productModel.js
│   ├── middlewares             # Contains middleware for validation
│   │   └── validationMiddleware.js
│   └── utils                   # Utility functions
│       └── errorHandler.js
├── package.json                # NPM configuration file
├── .env                        # Environment variables
├── .gitignore                  # Files to ignore in Git
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd product-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```
2. The API will be running on `http://localhost:3000`.

## API Endpoints

### Create a Product

- **Endpoint:** `POST /api/products`
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "description": "Product Description"
  }
  ```

### Get All Products

- **Endpoint:** `GET /api/products`

### Get a Product by ID

- **Endpoint:** `GET /api/products/:id`

### Update a Product

- **Endpoint:** `PUT /api/products/:id`
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "price": 150,
    "description": "Updated Description"
  }
  ```

### Delete a Product

- **Endpoint:** `DELETE /api/products/:id`

## Testing

You can use tools like Insomnia or Postman to test the API endpoints. Make sure to set the appropriate request method and headers, especially for POST and PUT requests.

## License

This project is licensed under the MIT License.