require("../util/connection");

const User = require("../models/user");

const main = async () => {
  const user = await User.findOneAndUpdate(
    { username: "pablo" },
    {
      name: "HolaPablo",
    }
  );

  console.log(user)
};

main();
