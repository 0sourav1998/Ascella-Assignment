import  mongoose from "mongoose";
import Book from "../models/book.model.js";

export const addBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;
    if (!title || !author || !publishedYear || !genre) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (typeof publishedYear !== "number") {
      return res
        .status(400)
        .json({ message: "Published year must be a number." });
    }

    const newBook = new Book({ title, author, publishedYear, genre });
    const savedBook = await newBook.save();

    const allBooks = await Book.find({})

    res.status(201).json({
        success : true ,
        message : "Book Added Successfully",
        savedBook ,
        allBooks
    });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      message: "Books Fetched Successfully",
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID." });
    }
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }
    res.status(200).json({
      success: true,
      message: "Book Fetched Successfully",
      book,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};

export const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishedYear, genre } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID." });
    }
    if (!title || !author || !publishedYear || !genre) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (typeof publishedYear !== "number") {
      return res
        .status(400)
        .json({ message: "Published year must be a number." });
    }
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, publishedYear, genre },
      { new: true, runValidators: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found." });
    }
    const books = await Book.find({})
    res.status(200).json({
      success: true,
      message: "Book Updated Successfully",
      updatedBook,
      books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID." });
    }
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found." });
    }
    const books = await Book.find({})
    res.status(200).json({
      success: true,
      message: "Book Deleted Successfully",
      deletedBook,
      books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};
