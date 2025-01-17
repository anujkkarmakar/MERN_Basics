import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/products.route.js';
import path from "path";
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON as respone body

const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 10, // limit each IP to 10 requests
	message: "Too many requests, please try again later.",
});

app.use("/api/", limiter)
app.use("/api/products", productRoutes)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
