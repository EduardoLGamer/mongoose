const mongoose = require("mongoose");
const secret = require("../secret.json");

const colors = require("colors");

mongoose.connect(secret.MongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.once("open", () => {
  console.log("[INFO] DataBase is connected".green);
});

mongoose.connection.on("error", (error) => {
  console.log(`[ERROR] ${error}`.red);
});
