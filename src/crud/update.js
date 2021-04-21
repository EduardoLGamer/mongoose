require("../util/connection");

const User = require("../models/user");

const main = async () => {
  const user = await User.update(
    { username: "eduardo" },
    { password: "contraseña123" }
  );
  console.log(user);
};

const main2 = async () => {
  const user = await User.findOne({ username: "eduardo" });

  console.log(user);

  user.password = "NewPassword";
  user.save();
};

main2();
