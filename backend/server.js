import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON as respone body

app.get("/", (req, res) => {
    res.send('Server is ready');
});

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({}); // findAll
        return res.status(201).json({success: true, message: products})
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({success: false, message: "Error fetching products"})
    }
});

app.post("/api/products", async (req, res) => {
    const product = req.body; // user will send the data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please provide all fields"});

    }

    const newProduct = Product(product)

    try {
        await newProduct.save();
        return res.status(201).json({success: true, message: newProduct});
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        return res.status(500).json({success: false, message: "Server error"});
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).json({success:true, message: "Successfully deleted"});
    } catch (error) {
        console.log(`Error: ${error.message}`)
        return res.status(404).json({success:false, message: "Cannot find product"});
    }
});

app.listen(1000, () => {
    connectDB();
    console.log('Server started at local host 1000 && Hello folks');
});
