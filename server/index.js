const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoute');
app.use('/api/user', userRoutes);

const startServer = async () => {  
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    catch (err) { console.log(err); }
};
startServer();
