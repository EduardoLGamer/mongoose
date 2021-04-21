/**
 * LEARNING MONGOOSE
 *
 * 03/02/2021
 */

require("./util/connection");

const Product = require("./models/Product");

const product = new Product({
  name: "laptop",
  description: "lenovo 6th generation",
  price: 1350.2,
});

product.save((error, document) => {
  if (error) console.log(`[ERROR] ${error}`.red);

  console.log(`[INFO]`.green, ` ${document}`);
});
