import express from "express";
// import bodyParser from "body-parser";
import cors from 'cors'
import {connectDB} from './src/config/db.js'
import createBook from "./src/app.js"

connectDB();

const app = express()

app.use(express.json())

app.use(cors({
    origin: "*"
}));

const PORT = 4000

app.get('/', (req,res)=>{
    res.send("This one is chyz book directory")
})

app.use('/books', createBook)

app.listen(PORT,()=>(console.log(`Ngwanu run naw... Ehen... this is port ${PORT}`)))