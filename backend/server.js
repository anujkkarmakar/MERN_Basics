import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/products.route.js';

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON as respone body

app.use("/api/products", productRoutes)

app.listen(1000, () => {
    connectDB();
    console.log('Server started at local host 1000 && Hello folks');
});
