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

## 🧪 How to Test with Postman

1. **Register a user**  
   `POST /api/auth/register`  
   ```json
   {
     "name": "John Doe",
     "email": "john@example.com",
     "password": "123456"
   }
````

2. **Login to get token**
   `POST /api/auth/login`
   Returns a JWT token. Use this in the `Authorization` header as:

   ```
   Bearer <your_token>
   ```

3. **Add a book (Authenticated)**
   `POST /api/books`

   ```json
   {
     "title": "Atomic Habits",
     "authors": ["James Clear"],
     "price": 25
   }
   ```

4. **Buy a book (Authenticated)**
   `POST /api/purchases/:bookId`

   ```json
   {
     "quantity": 2
   }
   ```

5. **View your purchases**
   `GET /api/purchases`

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB, Mongoose
* **Authentication**: JWT, bcrypt
* **Tools**: Postman for API testing

---

## 📁 Project Structure

```
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── .env
└── server.js
```

---

## 🧑‍💻 Author

**Mohamed Emad**
Built as a portfolio backend project. Feel free to fork or reach out if you’d like to collaborate!

---

## 📌 Notes

* Built for backend learning and practice
* Includes all core RESTful operations
* Handles validation and token errors gracefully

