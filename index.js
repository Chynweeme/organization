import express from 'express'
import dotenv from  'dotenv'
import {connectDB} from './config/db.js'

dotenv.config();
connectDB();



const app = express ();

app.use(express.json())

const port = 5100

app.get('/', (req,res)=>{
    res.send('This app is live')
})

app.listen(port, ()=>{
    console.log(`This app is running at port ${port}` )
})