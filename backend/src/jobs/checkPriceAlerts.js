const db = require("../config/db");
const sendEmail = require("../utils/mailer");

const checkPriceAlerts = async () => {
  try {
    // Get all alerts with user email and product info
    const [alerts] = await db.query(`
      SELECT pa.id AS alert_id, pa.desired_percent,
             u.email AS user_email,
             p.product_name AS product_name,
             p.price AS product_price,
             pa.target_price AS target_price
      FROM price_alerts pa
      JOIN users u ON pa.user_id = u.id
      JOIN products p ON pa.product_id = p.id
    `);

    alerts.forEach(alert => {
      const { user_email, product_name, desired_percent, product_price,target_price } = alert;

    

      // Send email if drop >= desired percent
      if (product_price <= target_price) {
        sendEmail(
          user_email,
          `Price Alert: ${product_name}`,
          `Good news! The price of ${product_name} dropped by ${desired_percent}% and is now $${product_price}.`
        );
      }
    });

  } catch (err) {
    console.error("Error checking price alerts:", err);
  }
};

module.exports = checkPriceAlerts;
