const express = require("express");
const app = express();
const PORT = 8000;

const userRouter = require("./Routes/user");
const { connectMongoDB } = require("./Connection/connection");
const {logReqRes}=require('./middlewares/middleware')

// Connect to MongoDB
connectMongoDB("mongodb://127.0.0.1:27017/userDB");

//middleWare
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logReqRes('log.txt'))

//routes
app.use("/api/users", userRouter);

// Start Server
app.listen(PORT, () => {
  console.log("Server started at PORT:", PORT);
});
