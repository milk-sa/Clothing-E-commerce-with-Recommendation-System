const express = require("express");
const router = express.Router();
const { setPriceAlert } = require("../controllers/priceAlertController");
const auth = require("../middleware/auth");

// POST /api/alerts
router.post("/",auth, setPriceAlert);

module.exports = router;
