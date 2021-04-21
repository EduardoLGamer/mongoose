require("./util/connection");
const Product = require("./models/Product");

const main = async () => {
  const product = new Product({
    name: "keyboard",
    description: "Abduzcam rgb game keyboard",
    price: 100,
  });

  const productSaved = await product.save();

  return productSaved;
};

main()
  .then((productSaved) => console.log(productSaved))
  .catch((error) => console.log(error));
