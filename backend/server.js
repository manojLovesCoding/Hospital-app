<<<<<<< HEAD
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
=======
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
>>>>>>> 59053e4181cd34daa9e80c4ce053ffcad6f6b3ed

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/admin", adminRouter); //localhost:4000/api/admin/add-doctor

app.get("/", (req, res) => {
  res.send("API WORKING great");
});

app.listen(port, () => console.log("Server Started", port));
