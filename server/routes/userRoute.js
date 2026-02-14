const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({message: "User registered successfully", user});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const user = await User.findByIdAndUpdate(
            id,
            { name, email, password },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;