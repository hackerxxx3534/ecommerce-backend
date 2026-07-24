const cartService = require("../services/cartService");

const createCart = async (req, res, next) => {
  try {
    const cart = await cartService.createCart();
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};

const getCart = async (req, res, next) => {
  try {
    const cart = await cartService.getCart(req.params.id);

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found"
      });
    }

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

const addItem = async (req, res, next) => {
  try {
    const { product, quantity } = req.body;

    const cart = await cartService.addItem(
      req.params.id,
      product,
      quantity
    );

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found"
      });
    }

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCart,
  getCart,
  addItem
};