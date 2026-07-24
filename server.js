const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use("/products", productRoutes);

app.use("/carts", cartRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});