const express = require('express');
const router = express.Router();
const multer = require('multer');
const User = require('../models/User');

// Storage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Make sure this directory exists and is writable. This is where the uploaded files will be stored on the server. You can customize this path as needed, but ensure that it has the appropriate permissions for file storage.
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const uploads = multer({ storage: storage }); // Multer middleware is configured to use the defined storage settings. This middleware will handle the parsing of multipart/form-data requests and manage the file uploads according to the specified storage configuration.

// UPDATE PROFILE PICTURE
router.put('/:id', uploads.single('picture'), async (req, res) => {
    try {
        const { id } = req.params;

        // Check id
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        // Check file
        if (!req.file) {
            return res.status(400).json({ message: "Picture is required" });
        }

        const picture = req.file.path;

        const user = await User.findByIdAndUpdate(
            id,
            { picture },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "Picture updated successfully",
            user
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }  
});

router.post('/' , uploads.single('picture'), async (req, res) => {
    // res.json(req.file);
    try {
        const { id } = req.body;

        // Check id
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        // Check file
        if (!req.file) {
            return res.status(400).json({ message: "Picture is required" });
        }

        const picture = req.file.path;

        const user = await User.findByIdAndUpdate(
            id,
            { picture },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "Picture updated successfully",
            user
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
