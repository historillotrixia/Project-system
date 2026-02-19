const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serve frontend files

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "marinduque_db"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

app.post("/login", (req, res) => {
    console.log("Login request body:", req.body); // <--- add this
    const { username, password } = req.body;

    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error("DB error:", err);
            return res.status(500).json({ success: false });
        }

        console.log("DB query result:", result); // <--- add this

        if (result.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
