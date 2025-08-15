const db = require("../config/db");

exports.testDBConnection = (req, res) => {
    db.query("SELECT 1 + 1 AS result", (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database test failed" });
        }
        res.json({ message: "Database connected", result: results[0].result });
    });
};
