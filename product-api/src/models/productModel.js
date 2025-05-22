class ProductModel {
    constructor() {
        // Initialize an empty array to store products
        this.products = [];
    }

    // Method to create a new product
    createProduct(productData) {
        // Assign a unique ID to the new product
        const newProduct = {
            id: this.products.length + 1,
            ...productData
        };
        // Add the new product to the products array
        this.products.push(newProduct);
        return newProduct;
    }

    // Method to retrieve all products
    getAllProducts() {
        return this.products;
    }

    // Method to retrieve a product by ID
    getProductById(productId) {
        return this.products.find(product => product.id === productId);
    }

    // Method to update a product by ID
    updateProduct(productId, updatedData) {
        const productIndex = this.products.findIndex(product => product.id === productId);
        if (productIndex !== -1) {
            this.products[productIndex] = { ...this.products[productIndex], ...updatedData };
            return this.products[productIndex];
        }
        return null; // Return null if product not found
    }

    // Method to delete a product by ID
    deleteProduct(productId) {
        const productIndex = this.products.findIndex(product => product.id === productId);
        if (productIndex !== -1) {
            const deletedProduct = this.products.splice(productIndex, 1);
            return deletedProduct[0]; // Return the deleted product
        }
        return null; // Return null if product not found
    }
}

module.exports = ProductModel;