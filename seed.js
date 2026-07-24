const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");
const products = require("./seedData/products");

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Database seeded successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();