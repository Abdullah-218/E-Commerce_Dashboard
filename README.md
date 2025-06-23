# 🛒 E-Commerce Dashboard (MERN Stack)

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green?logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Issues](https://img.shields.io/github/issues/Abdullah-218/E-Commerce_Dashboard)
![Pull Requests](https://img.shields.io/github/issues-pr/Abdullah-218/E-Commerce_Dashboard)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

---

This is a full-stack E-Commerce Dashboard built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It features secure user authentication, product management (CRUD operations), product search & filtering, and a modern, responsive frontend. Users can sign up, log in, view and manage products securely using JWT authentication.

---

## 🚀 Features

- 🔐 User registration and login with JWT token-based authentication
- 📦 Add, update, delete, and view products
- 🧾 User data securely stored using localStorage
- 🔁 Protected routes using token verification
- 📡 RESTful APIs using Express and Mongoose
- 🔎 Product search and filtering functionality
- 🎯 Modular component-based frontend using React
- 🔐 Focus on security and robust backend structure

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- React Router DOM

### Backend:
- Node.js
- Express.js
- Mongoose
- JWT (jsonwebtoken)
- Nodemon

### Database:
- MongoDB

---

## 🗂️ Folder Structure

```
E-Commerce-(MERN)/
├── backend/
│ ├── db/ # MongoDB connection
│ ├── config.js # App configuration & secret keys
│ ├── Product.js # Product schema/model
│ ├── Users.js # User schema/model
│ ├── index.js # Express server and API routes
│ └── package.json # Backend dependencies
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── addProduct.js
│ │ │ ├── updateProduct.js
│ │ │ ├── productList.js
│ │ │ ├── Login.js
│ │ │ ├── SignUp.js
│ │ │ ├── privateComponent.js
│ │ │ ├── Nav.js
│ │ │ └── Footer.js
│ │ ├── App.js
│ │ ├── index.js
│ └── package.json # Frontend dependencies
│
├── README.md
└── .gitignore
```
---

## ⚙️ Setup Instructions

### 📦 Backend Setup

```
cd backend
npm init
npm install express mongoose jsonwebtoken
npm install -g nodemon
nodemon index.js
```
### 📦 Frontend Setup

```
cd frontend
npx create-react-app .
npm install react-router-dom
npm star
```

### 🛢️ MongoDB Setup

```
Download and install MongoDB from the official website.
Run mongo in your terminal to check MongoDB is working.
```

### 🔐 Authentication (JWT)

-JWT tokens are generated on successful login and sent with each request via the Authorization header.
-A middleware (verifyToken) is used in backend routes to protect access.
-On the frontend, private routes are implemented using token validation logic.
-The user data is stored in localStorage for session persistence.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 👤 Author

** Abdullah **

- GitHub: [@Abdullah-218]([https://github.com/abdullahmax](https://github.com/Abdullah-218))
- LinkedIn: [Your LinkedIn Name](www.linkedin.com/in/abdullahxdev)

> Built this as a learning and portfolio project. Contributions are welcome!
