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
             pa.target_price AS target_price,
             pa.is_sent AS is_sent
      FROM price_alerts pa
      JOIN users u ON pa.user_id = u.id
      JOIN products p ON pa.product_id = p.id
    `);

   alerts.forEach(async alert => {
    const { alert_id, user_email, product_name, desired_percent, product_price, target_price, is_sent } = alert;
    
    // Only send if not already sent
    if (!is_sent && product_price <= target_price) {
        // Send email
        await sendEmail(
            user_email,
            `Price Alert: ${product_name}`,
            `Good news! The price of ${product_name} dropped by ${desired_percent}% and is now $ETB{product_price}.`
        );

        // Mark as sent in the database
        await db.query(
            "UPDATE price_alerts SET is_sent = 1 WHERE id = ?",
            [alert_id]
        );

        console.log(`Email sent and marked as sent for alert ID ${alert_id}`);
    }
});


  } catch (err) {
    console.error("Error checking price alerts:", err);
  }
};

module.exports = checkPriceAlerts;
