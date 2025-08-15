const db = require("./src/config/db");
const express = require("express");

const cron = require("node-cron");
const checkPriceAlerts = require("./src/jobs/checkPriceAlerts");


const Product = require('./src/models/product');





require("dotenv").config();

const app = express();


app.use(express.json());


// Import routes
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require('./src/routes/ProductRoutes');
const priceAlertRoutes = require("./src/routes/priceAlertRoutes");


// Mount routes with /api prefix
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/alerts", priceAlertRoutes);


app.get("/", (req, res) => {
  res.send("E-commerce API is running...");
});


// run every 5 minutes
cron.schedule("*/1 * * * *", () => {
  console.log("Checking price alerts...");
  checkPriceAlerts();
});

module.exports = app;





