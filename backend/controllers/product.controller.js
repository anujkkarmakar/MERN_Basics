import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // findAll
        return res.status(200).json({success: true, data: products})
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({success: false, message: "Error fetching products"})
    }
};

export const createProduct = async (req, res) => { 
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
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: "false", message: "Please enter a valid id"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        return res.status(201).json({success: true, data: updatedProduct});
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal server error"});
    }
};

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).json({success:true, message: "Successfully deleted"});
    } catch (error) {
        console.log(`Error: ${error.message}`)
        return res.status(404).json({success:false, message: "Cannot find product"});
    }
};