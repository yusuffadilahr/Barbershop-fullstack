import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();
// Tambahkan middleware body-parser untuk meng-handle body parsing

try {
    await db.authenticate();
    console.log('Database Connected!')
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit:'10mb', extended: true }));
app.use(router);

app.listen(5000, () => console.log('running at port 5000'));