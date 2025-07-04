# 📚 Bookstore API

A simple and functional **RESTful API** built with **Node.js**, **Express**, and **MongoDB** that allows users to register, log in, browse books, and make purchases. Designed as a backend project for learning and portfolio development.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Register new users
  - Secure password hashing with bcrypt
  - Login with JWT token generation
  - Auth middleware with `Bearer <token>` support

- 📚 **Books API**
  - Add, view, update, and delete books
  - Supports multiple authors (array of strings or references)

- 🛒 **Purchase System**
  - Authenticated users can buy books
  - Purchase includes quantity, book reference, user, and timestamp
  - Fetch all past purchases by the logged-in user

- ✅ **Token-based route protection**
  - Routes secured via middleware
  - JWT decoded to get current user context

---

## 📫 API Endpoints

### Auth

#### ✅ Register a new user
`POST /api/auth/register`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
🔐 Login to receive a token
POST /api/auth/login

Returns:

json
Copy
Edit
{
  "token": "your_jwt_token"
}
Use this token in Postman under:

yaml
Copy
Edit
Authorization → Type: Bearer Token → Token: your_jwt_token
Books
➕ Add a new book (Authenticated)
POST /api/books

json
Copy
Edit
{
  "title": "Atomic Habits",
  "authors": ["James Clear"],
  "price": 25
}
📖 Get all books
GET /api/books

📝 Update a book (Authenticated)
PUT /api/books/:id

❌ Delete a book (Authenticated)
DELETE /api/books/:id

Purchases
🛒 Buy a book (Authenticated)
POST /api/purchases/:bookId

json
Copy
Edit
{
  "quantity": 2
}
📦 Get user's purchase history (Authenticated)
GET /api/purchases

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: JWT, bcrypt

Testing: Postman

📁 Project Structure
pgsql
Copy
Edit
bookstore-api/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── .env
└── server.js
👨‍💻 Author
Mohamed Emad
Feel free to fork, clone, or contribute to this project.

📌 Notes
Built for backend practice and portfolio.

Includes full CRUD operations.

JWT-secured endpoints.

Handles all basic validation and errors gracefully.