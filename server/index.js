import express from 'express'
import dotenv from 'dotenv'
import connectDb from './database/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config({});

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : process.env.ORIGIN,
    credentials : true 
}))


const PORT = process.env.PORT;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is live at port ", PORT);
        
    })
})

import UserRoute from './routes/user.routes.js';

app.use("/api/v1/user",UserRoute);

