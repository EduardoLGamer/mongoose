require("../util/connection");

const User = require("../models/user");

const main = async () => {
  const deleteUser = User.findOneAndDelete({
    username: "",
  });
};

const main2 = async () => {
  const deleteUser = User.deleteMany({
    username: "pablo",
  });
  console.log(deleteUser);
};
const main3 = async () => {
  const deleteUser = User.deleteOne({
    name: "HolaPablo",
  });
  console.log(deleteUser);
};

const main4 = async () => {
  const deleteUser = User.findByIdAndDelete("601b560cfc1a272bb47fe145");
  console.log(deleteUser);
};
main4();
