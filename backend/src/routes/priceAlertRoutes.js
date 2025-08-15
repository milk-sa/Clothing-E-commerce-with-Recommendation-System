const express = require("express");
const router = express.Router();
const { setPriceAlert } = require("../controllers/priceAlertController");

// POST /api/alerts
router.post("/", setPriceAlert);

module.exports = router;
