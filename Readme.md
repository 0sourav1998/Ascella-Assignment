# MERN Stack Application

This is a **MERN** (MongoDB, Express, React, Node.js) stack application. Follow the instructions below to set up and run both the frontend and backend.

## Prerequisites

Make sure you have the following installed:
- **Node.js** (>=v14.x)
- **npm** (>=v6.x) or **yarn**
- **MongoDB** (or use a cloud MongoDB service like MongoDB Atlas)

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/0sourav1998/Ascella-Assignment.git


2. Set up the Backend
Navigate to the backend directory:

```bash
Copy code
cd backend
Install the backend dependencies:

bash
Copy code
npm install
Create a .env file in the backend folder and add the following variables (adjust according to your setup):

makefile
Copy code
MONGO_URI=<your-mongo-db-uri>
PORT=5000
JWT_SECRET=<your-jwt-secret-key>
Replace <your-mongo-db-uri> with the MongoDB connection URI (either from a local database or MongoDB Atlas).
Replace <your-jwt-secret-key> with a strong secret key for JWT.
3. Set up the Frontend
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the frontend dependencies:

bash
Copy code
npm install
Create a .env file in the frontend folder and add the following variable:

arduino
Copy code
REACT_APP_API_URL=http://localhost:3000
This ensures the React app will communicate with the backend API.

Start the frontend development server:

bash
Copy code
npm run dev
The React development server will now be running at http://localhost:3000.

4. Start the Backend Server
After setting up the .env file in the backend folder, start the backend server:

bash
Copy code
npm run dev
The backend server will now be running at http://localhost:5000.

5. Testing the Application
With both frontend and backend running, you can now access the application:

Frontend: http://localhost:3000
Backend API: http://localhost:5000