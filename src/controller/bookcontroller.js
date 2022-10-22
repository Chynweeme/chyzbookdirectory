import mongoose from 'mongoose'

import { book } from '../model/bookmodel.js'

export const createNewBook = async(req,res)=>{
    try {
            const {title, author, genre, pages}= req.body;  
            const createBook = await book.create({
                title,
                author,
                genre,
                pages
            });
            if(createBook){
                res.json({
                    _id: createBook._id,
                    title: createBook.title,
                    author: createBook.author,
                    genre: createBook.genre,
                    pages: createBook.pages
                })
            }

            await createBook.save();
            res.json({
                message:"New book created successfully",
                data: createBook
            })
    } catch (error) {
       console.error(error.message) 
    }
}

export const getAllBooks = async(req,res)=>{
  
    try {
            const bk = await book.find()
            
            if(bk){
                res.send(bk)
            }else{
                res.send('No book found')
            }

    } catch (error) {
        console.error(error.message)
    }
}

export const getBook = async(req,res)=>{
   try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.json({message: "Cant find this particular book. Please try again with the correct id"})
        }
        const id = req.params.id;
        const bk = await book.findById(id);
        if(bk){
            res.send(bk);
        }
   } catch (error) {
        console.error(error.message)
   } 
}

export const updateBook = async(req,res)=>{
   try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.json({
                message:"Recipe not found"
            });
        }
        const id = req.params.id;
        const bk = await book.findByIdAndUpdate(id,req.body,{
            new: true,
            runValidators: true
        })
        if(bk){
            res.json({
                message:"Book updated successfully",
                data: bk
            })
        }
   } catch (error) {
    console.error(error.message);
   } 
}

export const deleteBook = async(req,res)=>{
  try {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.json({
            message:"Book not found and therefore can't be deleted. Check if the id is correct and try again."
        });
    }
    const id = req.params.id;
    const bk = await book.findByIdAndDelete(id)
    if(bk){
        res.json({message: "Book deleted succesfully!"})
    }
  } catch (error) {
    console.error(error.message)
  }  
}