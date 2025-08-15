const express = require("express");
const router = express.Router();
const { testDBConnection } = require("../controllers/testController");

router.get("/testdb", testDBConnection);

module.exports = router;
