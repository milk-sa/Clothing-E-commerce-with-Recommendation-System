
const Product = require('../models/product');

// Add new product
const addProduct = (req, res) => {
  Product.createProduct(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Product added successfully", productId: result.insertId });
  });
};

// Get all products
const getProducts = (req, res) => {
  Product.getAllProducts((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

module.exports = {
  addProduct,
  getProducts,
};
