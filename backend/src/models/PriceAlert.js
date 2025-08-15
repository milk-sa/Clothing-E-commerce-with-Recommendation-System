const db = require("../config/db");

// Create a new price alert
const createAlert = (userId, productId, dropPercent, callback) => {
  db.query("SELECT price FROM products WHERE id = ?", [productId], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(new Error("Product not found"));

    const currentPrice = parseFloat(results[0].price);
    const targetPrice = currentPrice - (currentPrice * (dropPercent / 100));

    const sql = `
      INSERT INTO price_alerts (user_id, product_id, desired_percent, target_price)
      VALUES (?, ?, ?, ?)
    `;
    db.query(sql, [userId, productId, dropPercent, targetPrice], callback);
  });
};

module.exports = { createAlert };
