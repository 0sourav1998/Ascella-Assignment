import React, { createContext, useState } from "react";

export const bookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [bookDetails, setBookDetails] = useState([]);
  const [edit,setEdit] = useState(false);
  const [singleBook,setSingleBook] = useState({})
  return (
    <bookContext.Provider value={{ bookDetails, setBookDetails , edit ,setEdit ,singleBook ,setSingleBook }}>
      {children}
    </bookContext.Provider>
  );
};

export default BookContextProvider;
