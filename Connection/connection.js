const mongoose = require("mongoose");

async function connectMongoDB(url) {
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Error Occurred", err));
}
module.exports = {
  connectMongoDB,
};
