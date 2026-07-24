const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/", cartController.createCart);
router.get("/:id", cartController.getCart);
router.post("/:id/items", cartController.addItem);

module.exports = router;