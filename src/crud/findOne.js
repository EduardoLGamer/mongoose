require("../util/connection");

const User = require("../models/user");

const main = async () => {
  const find = await User.findOne({ username: "eduardo" });
  console.log(find);
};

main();
