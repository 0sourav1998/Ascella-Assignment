# Book Management API

## Overview

This project is a **RESTful API** built with **Node.js**, **Express.js**, and **MongoDB** to manage a collection of books. The API provides the ability to perform CRUD (Create, Read, Update, Delete) operations on books. It also uses **Mongoose** for MongoDB object modeling and **dotenv** for environment variable management.

## Features

- **Add a Book**: Create new book entries.
- **Retrieve Books**: Fetch all books or a specific book by its ID.
- **Update a Book**: Update an existing book by its ID.
- **Delete a Book**: Delete a specific book by its ID.

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**
- **MongoDB**

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

# API Endpoints Documentation

## Base URL: `/api/v1`

### Endpoints

---

### **1. Get All Books**

- **Endpoint**: `/books`
- **Method**: `GET`
- **Description**: Fetch all books.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Books Fetched Successfully",
    "books": [
      {
        "_id": "book_id",
        "title": "Book Title",
        "author": "Author Name",
        "publishedYear": 2023,
        "genre": "Fiction",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ]
  }
  ```

### **2. Get Book by ID**

- **Endpoint**: `/book/:id`
- **Method**: `GET`
- **Description**: Fetch a specific book by its ID.
- **Path Parameters**:
  - `id`: MongoDB ObjectID of the book.
- **Response**:

  ```json
  {
    "success": true,
    "message": "Book Fetched Successfully",
    "book": {
      "_id": "book_id",
      "title": "Book Title",
      "author": "Author Name",
      "publishedYear": 2023,
      "genre": "Fiction",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```

  ### **3. Add a Book**

- **Endpoint**: `/books`
- **Method**: `POST`
- **Description**: Add a new book.
- **Request Body**:

  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "publishedYear": 2023,
    "genre": "Fiction"
  }
  ```

  ### **4. Update a Book**

- **Endpoint**: `/books/:id`
- **Method**: `PUT`
- **Description**: Update a specific book by its ID.
- **Path Parameters**:
  - `id`: MongoDB ObjectID of the book.
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "publishedYear": 2023,
    "genre": "Non-Fiction"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Book Updated Successfully",
    "updatedBook": {
      "_id": "book_id",
      "title": "Updated Title",
      "author": "Updated Author",
      "publishedYear": 2023,
      "genre": "Non-Fiction",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```
- **Error Responses**:
  - `400`: Invalid book ID or missing fields.
  - `404`: Book not found.
  - `500`: Internal Server Error.

### **4. Update a Book**

- **Endpoint**: `/books/:id`
- **Method**: `PUT`
- **Description**: Update a specific book by its ID.
- **Path Parameters**:
  - `id`: MongoDB ObjectID of the book.
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "publishedYear": 2023,
    "genre": "Non-Fiction"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Book Updated Successfully",
    "updatedBook": {
      "_id": "book_id",
      "title": "Updated Title",
      "author": "Updated Author",
      "publishedYear": 2023,
      "genre": "Non-Fiction",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```
- **Error Responses**:

  - `400`: Invalid book ID or missing fields.
  - `404`: Book not found.
  - `500`: Internal Server Error.

  ### **5. Delete a Book**

- **Endpoint**: `/books/:id`
- **Method**: `DELETE`
- **Description**: Delete a specific book by its ID.
- **Path Parameters**:
  - `id`: MongoDB ObjectID of the book.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Book Deleted Successfully",
    "deletedBook": {
      "_id": "book_id",
      "title": "Deleted Title",
      "author": "Deleted Author",
      "publishedYear": 2023,
      "genre": "Genre",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```
- **Error Responses**:
  - `400`: Invalid book ID.
  - `404`: Book not found.
  - `500`: Internal Server Error.
