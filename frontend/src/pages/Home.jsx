import React, { useContext, useEffect, useState } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import axios from "axios";
import { bookContext } from "../context/BookContextProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const { bookDetails, setBookDetails } = useContext(bookContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    toast.success("Logged Out Successfully")
  }

  const getAllBooks = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
      if (response && response.data.success) {
        setBookDetails(response.data.books);
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    getAllBooks();
  }, [bookDetails]);

  return (
    <div className="book-container">
      <div className="nav">
        <h3>Book Management</h3>
        <div>
          {
            !token && <div>
              <button onClick={()=>navigate("/login")}>Login</button>
              <button onClick={()=>navigate("/signup")}>Create Account</button>
            </div>
          }
          {
            token && <button onClick={handleLogout}>Logout</button>
          }
        </div>
      </div>
      {
        token && <BookForm />
      }
      <BookList />
    </div>
  );
};

export default Home;
