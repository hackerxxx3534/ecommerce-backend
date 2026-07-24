const Cart = require("../models/Cart");

const createCart = () => Cart.create({ items: [] });

const getCart = (id) =>
  Cart.findById(id).populate("items.product");

const addItem = async (id, product, quantity) => {
  const cart = await Cart.findById(id);

  if (!cart) return null;

  cart.items.push({
    product,
    quantity
  });

  await cart.save();

  return Cart.findById(id).populate("items.product");
};

module.exports = {
  createCart,
  getCart,
  addItem
};