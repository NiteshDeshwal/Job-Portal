import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http//localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));

const PORT = process.envPORT || 5000;

//api's 
app.use("/api/v1/user",userRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port ${PORT}`);
})