const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: String,
  date: {
    type: String,
    default: new Date(),
  },
  name: String,
});

module.exports = model("User", userSchema);
