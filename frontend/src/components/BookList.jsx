import React, { useContext } from "react";
import { bookContext } from "../context/BookContextProvider";
import "./BookList.css";
import toast from "react-hot-toast";
import axios from "axios";

const BookList = () => {
  const { bookDetails, setBookDetails, setEdit, setSingleBook } =
    useContext(bookContext);
  const token = localStorage.getItem("token");

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/books/${id}`
      );
      if (response && response.data.success) {
        toast.success(response.data.message);
        setBookDetails(response.data.books);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published Year</th>
            <th>Genre</th>
            {token && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(bookDetails) && bookDetails.length > 0 ? (
            bookDetails.map((book) => (
              <tr key={book._id}>
                <td className="table-data">{book.title}</td>
                <td className="table-data">{book.author}</td>
                <td className="table-data">{book.publishedYear}</td>
                <td className="table-data">{book.genre}</td>
                {token && (
                  <td className="btn-container">
                    <button
                      onClick={() => {
                        setEdit(true);
                        setSingleBook(book);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(book._id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No books available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
