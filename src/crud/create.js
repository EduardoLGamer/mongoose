require("../util/connection");

const User = require("../models/user");

const main = async () => {
  const createUser = new user({
    username: "Pablo",
    password: "abcasdasdasda",
  });

  await createUser.save();
};

main();
