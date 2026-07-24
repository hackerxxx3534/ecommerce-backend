const Product = require("../models/Product");

const getAllProducts = () => Product.find();

const getProductById = (id) => Product.findById(id);

const createProduct = (data) => Product.create(data);

const updateProduct = (id, data) =>
  Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });

const deleteProduct = (id) =>
  Product.findByIdAndDelete(id);

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};