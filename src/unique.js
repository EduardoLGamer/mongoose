require("./util/connection");

const User = require("./models/user");

const main = async () => {
  const user = new User({
    username: "pablo",
    password: "abuscan",
  });
  await user.save();
};

main();
