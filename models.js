const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  password: String
});

const user = new mongoose.model("User", userSchema);

module.exports = user;
