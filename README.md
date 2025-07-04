# 📚 Bookstore API

A fully functional **RESTful API** built with **Node.js**, **Express**, and **MongoDB**, designed for learning and portfolio development. This API allows users to register, log in, browse books, and make purchases securely using JWT authentication.

---

## 🚀 Features

### 🔐 User Authentication
- Register new users
- Login with JWT token generation
- Secure password hashing using bcrypt
- Middleware handles Bearer Token (`Authorization: Bearer <token>`)

### 📚 Book Management
- Add, view, update, and delete books (CRUD)
- Support for multiple authors (as an array of strings or references)

### 🛒 Purchase System
- Authenticated users can purchase books
- Each purchase includes: user, book, quantity, and date
- View all purchases made by the logged-in user

### ✅ Route Protection
- All protected routes use token-based authentication
- Tokens are verified and decoded via middleware

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
│   ├── AuthController.js
│   ├── BookController.js
│   └── PurchaseController.js
├── middleware/
│   └── Auth.js
├── models/
│   ├── User.js
│   ├── Book.js
│   └── Purchase.js
├── routes/
│   ├── auth.js
│   ├── books.js
│   └── purchases.js
├── utils/
│   └── db.js
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