import express from "express";
import { createNewBook, deleteBook, getAllBooks, getBook, updateBook } from "./controller/bookcontroller.js";


const router = express.Router()

router.get("/", getAllBooks)
router.post('/create', createNewBook)
router.get('/:id', getBook)
router.put('/update/:id',updateBook)
router.delete('/delete/:id',deleteBook)

export default router