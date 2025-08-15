const db = require("../config/db");

const setPriceAlert = async (req, res) => {
  const { product_id, desired_percent } = req.body;
  const user_id = req.user?.id || 1; // temporary user id for testing if no auth

  if (!product_id || !desired_percent) {
    return res.status(400).json({ message: "Please provide product_id and desired_percent" });
  }

  try {
    // Get current product price to store as target_price / price_at_alert
    const [products] = await db.query("SELECT price FROM products WHERE id = ?", [product_id]);
    if (products.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    const product_price = products[0].price;
    const target_price = product_price * (1 - desired_percent / 100);

    // Insert price alert
    const [result] = await db.query(
      "INSERT INTO price_alerts (user_id, product_id, desired_percent, target_price) VALUES (?, ?, ?, ?)",
      [user_id, product_id, desired_percent, target_price]
    );

    res.status(201).json({
      message: "Price alert set successfully",
      alertId: result.insertId
    });

  } catch (err) {
    console.error("Error setting price alert:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { setPriceAlert };
