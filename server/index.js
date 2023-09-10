import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRouters from './routes/dalle.routes.js'

dotenv.config();

const app =express();
app.use(cors());
app.use(express.json({limig:"50mb"}))

app.use("/api/v1/dalle", dalleRouters)

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from DALL-E"})
})

app.listen(3000,()=>console.log('Server has Started on port 3000'))