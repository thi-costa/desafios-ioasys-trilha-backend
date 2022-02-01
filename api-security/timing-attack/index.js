const Pool = require("pg").Pool;
const express = require("express");
const bcrypt = require("bcrypt");
const config = require("./database");
const app = express();
const port = 3000;

const pool = new Pool(config);

app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");

        res.json(allUsers.rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.post("/users/login", async (req, res) => {
    const { email, password } = req.body;
    const validEmail = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    if (!(validEmail.rows.length === 0)) {
        const hashPassword = await bcrypt.hash(validEmail.rows[0].password, 10);
        const validPassword = await bcrypt.compare(password, hashPassword);
        return validPassword
            ? res.status(200).json("Sucess!")
            : res.status(401).json("Invalid credentials");
    } else {
        const fakePassword = await bcrypt.hash(password, 10); // Avoiding the timing attack
        const validPassword = await bcrypt.compare(password, fakePassword);
        return res.status(401).json("Invalid credentials");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
