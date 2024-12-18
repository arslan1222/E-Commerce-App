import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';

// App Config

const app = express();
const PORT = process.env.PORT || 8080;
connectDB();
connectCloudinary();

// Middelwares
app.use(express.json()); // Whatever req will be get will be parse using this
app.use(cors()) // We can access the backend from any API

// API endpoints

app.use('/api/user', userRouter);

app.get('/', (req, res)=>{
    res.send("I am root!")
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})