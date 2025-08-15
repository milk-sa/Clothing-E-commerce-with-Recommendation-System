const { createAlert } = require("../models/PriceAlert");

const setPriceAlert = (req, res) => {
  const { product_id, desired_percent } = req.body;
  const user_id = req.user?.id || 1; // temporary user id for testing if no auth

  createAlert(user_id, product_id, desired_percent, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: "Price alert set successfully", alertId: result.insertId });
  });
};

module.exports = { setPriceAlert };
