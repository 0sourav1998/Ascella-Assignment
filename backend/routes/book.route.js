import express from "express";
import { addBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "../controllers/book.controller.js";
const router = express();


router.get("/books",getAllBooks);
router.get("/book",getBookById)
router.post("/books",addBook)
router.put("/books/:id",updateBookById)
router.delete("/books/:id",deleteBookById)


export default router ;