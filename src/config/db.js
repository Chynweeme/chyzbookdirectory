import mongoose from "mongoose";


export const connectDB = async()=> {
    try{
        mongoose.connect("mongodb+srv://Chynwe:12321@cluster0.t1blcgj.mongodb.net/test")
        console.log(`Connected to MongoDB successfully Chynweeeeehhh`)
    } catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}