const db = require("../config/db");


// Insert product into DB
const createProduct = (product, callback) => {
  const { product_name, description, price, img_url } = product;
  const sql = "INSERT INTO products (product_name, description, price, img_url) VALUES (?, ?, ?, ?)";
  db.query(sql, [product_name, description, price, img_url], callback);
};

// Fetch all products
const getAllProducts = (callback) => {
  db.query("SELECT * FROM products", callback);
};

module.exports = {
  createProduct,
  getAllProducts,
};
