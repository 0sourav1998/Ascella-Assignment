import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { bookContext } from "../context/BookContextProvider";

const BookForm = () => {
  const { setBookDetails, edit, singleBook, setEdit } = useContext(bookContext);

  const [book, setBook] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
  });

  const cancelEdit = () => {
    setEdit(false);
    setBook({
      title: "",
      author: "",
      publishedYear: "",
      genre: "",
    });
  };

  useEffect(() => {
    if (edit && singleBook) {
      setBook({
        title: singleBook.title,
        author: singleBook.author,
        publishedYear: singleBook.publishedYear,
        genre: singleBook.genre,
      });
    }
  }, [edit, singleBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBookData = {
      ...book,
      publishedYear: Number(book.publishedYear),
    };
    if (edit) {
       const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/books/${singleBook._id}`,
        updatedBookData
      );
      if (response && response.data.success) {
        toast.success(response.data.message);
        setBookDetails(response.data.allBooks);
        cancelEdit();
      }else{
        toast.error(error.response.data.message)
      }
    } else {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/books`,
        updatedBookData
      );
      if (response && response.data.success) {
        toast.success(response.data.message);
        setBookDetails(response.data.allBooks);
        setBook({
          title: "",
          publishedYear: "",
          genre: "",
          author: "",
        });
      } else {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <h2 className="edit-add">{edit ? "Edit Book" : "Add New Book"}</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="inner-divs">
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={(e) =>
              setBook((prev) => ({ ...prev, title: e.target.value }))
            }
            className="input"
            required
            placeholder="Enter Book Title"
          />

          <input
            type="text"
            name="author"
            value={book.author}
            className="input"
            placeholder="Enter Book Author"
            onChange={(e) =>
              setBook((prev) => ({ ...prev, author: e.target.value }))
            }
            required
          />
        </div>
        <div className="inner-divs">
          <input
            type="string"
            name="publishedYear"
            className="input"
            placeholder="Enter Book Published Year"
            value={book.publishedYear}
            onChange={(e) =>
              setBook((prev) => ({ ...prev, publishedYear: e.target.value }))
            }
            required
          />

          <input
            type="text"
            name="genre"
            value={book.genre}
            placeholder="Enter Book Genre"
            className="input"
            onChange={(e) =>
              setBook((prev) => ({ ...prev, genre: e.target.value }))
            }
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn">
            {edit ? "Update" : "Add"}
          </button>
          {edit && (
            <button className="btn" onClick={cancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookForm;
