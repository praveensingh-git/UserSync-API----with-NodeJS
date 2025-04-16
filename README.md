# <img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" width="60">  User Management API — Express + MongoDB
<img src="https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif" width="100"> <img src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif" width="100">
<img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/1a797f46-efe4-41e6-9e75-5303e1bbcbfa" width="100">
<img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/398b19b1-9aae-4c1f-8bc0-d172a2c08d68" width="100">
<img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" width="100">






 <br>
Welcome to the User Management RESTful API! This is a lightweight backend project using Express.js, MongoDB, and Mongoose, designed to manage user data with full CRUD functionality and request logging.

---

## 📑 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [API Endpoints](#-api-endpoints)
- [Usage Examples](#-api-usage-examples)
- [Core Files Explained](#-core-files-explained)
- [License](#-license)

---

## ✅ Features

- Create, Read, Update, Delete (CRUD) users
- MongoDB integration with Mongoose
- Custom logging middleware (`log.txt`)
- Clean RESTful API design
- Modular file structure

---

## 📦 Project Structure

- `Models/`  
  └── `user.js` — Mongoose schema for user data  
- `Controllers/`  
  └── `user.js` — Logic for handling user routes  
- `Routes/`  
  └── `user.js` — API endpoints (REST routes)  
- `middlewares/`  
  └── `middleware.js` — Custom middleware for logging  
- `Connection/`  
  └── `connection.js` — MongoDB connection handler  
- `index.js` — Main entry point (Express server)  
- `log.txt` — Logs all API requests

---

## 💻 Installation

### 1. Clone repository
```bash
git clone https://github.com/praveensingh-git/UserSync-API-with-NodeJS.git
```
### 2. Install dependencies
```
npm install express mongoose
```
### 3. Start MongoDB
Make sure MongoDB is running locally or use MongoDB Atlas.
### 4. Run the server
For automatic server restarts during development, install `nodemon`:
```
npm install nodemon
nodemon index.js
```
Server will start on `http://localhost:8000`
You should see the following output:
```
MongoDB connected
Server started at PORT: 8000
```

---

## 🌐 API Endpoints

| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| GET    | /users           | HTML user list             |
| GET    | /api/user        | List all users (JSON)      |
| GET    | /api/user/:id    | Get user by ID             |
| POST   | /api/user        | Create new user            |
| PATCH  | /api/user/:id    | Update user                |
| DELETE | /api/user/:id    | Delete user                |

---

## 📡 API Usage Examples
###Create User
`POST /api/user`
``Content-Type: application/json``
```
{
  "firstName": "Alice",
  "lastName": "Smith",
  "age": 28,
  "email": "alice@example.com",
  "gender": "Female",
  "Profession": "Engineer"
}
```
### Get User by ID
`GET /api/user/663d4a5c8a2b6a1748f6f2e1 `
### Update User by ID
`PATCH /api/user/663d4a5c8a2b6a1748f6f2e1`
`Content-Type: application/json`

---

## 🔍 Sample Responses
<details> <summary>Success Response</summary>

  `{
  "status": "Success", 
  "data": {
    "_id": "663d4a5c8a2b6a1748f6f2e1",
    "firstName": "Alice",
    "lastName": "Smith",
    "age": 29,
    "email": "alice@example.com",
    "Profession": "Senior Engineer",
    "createdAt": "2024-05-10T09:23:40.123Z"
  }
}`

</details><details> <summary>Error Response</summary>

`{
  "error": "Validation Failed",
  "details": {
    "age": "Must be a positive number"
  }
}`
</details>


---


## 🛠 Core Files Explained
### `index.js`
```
const express = require("express");
const app = express();
const PORT = 8000;

const userRouter = require("./Routes/user");
const { connectMongoDB } = require("./Connection/connection");
const { logReqRes } = require('./middlewares/middleware');

connectMongoDB("mongodb://127.0.0.1:27017/userDB");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logReqRes('log.txt'));

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("Server started at PORT:", PORT);
});
```
### `middlewares/middleware.js`
Logs every request into log.txt with timestamp, IP, path, and method.
```
fs.appendFile(
  filename,
  `${Date.now()}:${req.ip}:${req.path}:${req.method}`,
  (err) => {
    if (err) console.error("Logging failed:", err);
    next();
  }
);
```
### `Connection/connection.js`
Connects to MongoDB using Mongoose.
```
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```
### `Models/user.js`
Defines the user schema.
```
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: { type: String, unique: true },
  gender: String,
  profession: String
}, { timestamps: true });
```
### `Controllers/user.js`
Handles route logic for:

`handleGetAllUsers`

`handleGetUserByID`

`handleCreateNewUser`

`handleUpdateUserByID`

`handleDeleteUserByID`

Each function uses async/await, handles errors, and validates data.

### `Routes/user.js`
Defines Express routes for user operations.
```
router.route("/")
  .get(handleGetAllUsers)
  .post(handleCreateNewUser);

router.route("/:id")
  .get(handleGetUserByID)
  .patch(handleUpdateUserByID)
  .delete(handleDeleteUserByID);

```

---

## 🛑 Important Notes
Ensure MongoDB is running on `mongodb://127.0.0.1:xxxxx`

All requests are logged in log.txt

## 🧑‍💻 Author
Made with 💻 + ☕️ by <a href="https://github.com/praveensingh-git">Praveen</a>

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/214644152-52f47eb3-5e31-4f47-8758-05c9468d5596.gif" alt="BYE" width="150">
</div>

