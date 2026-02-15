// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// // console.log(multer);
// const User = require('../models/User');

// // const uploads = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         cb(null, 'uploads/');
// //         // console.log("storage"+cb);
        
// //     },
// //     filename: function (req, file, cb) {
// //         cb(null, Date.now() + '-' + file.originalname);
// //     }
// // });

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const upload = multer({ storage: storage });

// router.post('/', upload.single('picture'), async (req, res) => {
//     try {
//         const { id } = req.body;
//         const picture = req.file.path; // Access the uploaded file's path
//         const user = await User.findByIdAndUpdate(
//             id,
//             { picture },
//             { new: true }
//         );
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json({ message: "Picture uploaded successfully", user });
//     } catch (err) {
//         res.json({ message: err.message });
//     }
// });

// router.put('/', upload.single('picture'), async (req, res) => {
//     try {
//         const { id } = req.body;
//         const picture = req.file.path; // Access the uploaded file's path
//         const user = await User.findByIdAndUpdate(
//             id,
//             { picture },
//             { new: true }
//         );
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json({ message: "Picture updated successfully", user });
//     } catch (err) {
//         res.json({ message: err.message });
//     }
// });

// // router.put('/' , upload.single('picture'), async(req , res)=>{
// //     try{
// //         const { id, picture } = req.body;
// //         const user = await User.findByIdAndUpdate(
// //             id,
// //             { picture },
// //             { new: true }
// //         );
// //         if (!user) {
// //             return res.status(404).json({ message: 'User not found' });
// //         }
// //         res.status(200).json({message:"Picture updated successfully", user});
// //     }
// //     catch(err){
// //         res.json({message:err.message})
// //     }
// // });

// module.exports= router;
