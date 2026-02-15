const express = require('express');
const router = express.Router(); // We are creating a new router instance using express.Router() to define routes related to user authentication. This allows us to modularize our route definitions and keep our code organized. By using a router, we can group related routes together and easily manage them in our main server file (index.js) by mounting the router on a specific path (e.g., '/api/login').
const User = require('../models/User');

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const a = await User.findOne({ email }).select("password");
        if (!a) {
            return res.status(404).json({ message: "User not found" });
        }
        if (a.password == password) {
            res.json({
                message: "Login successful"
                , id: a._id
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
module.exports = router;