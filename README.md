# eCommerce Backend API

## Project Description

This project is a RESTful eCommerce backend built with **Node.js**, **Express**, and **MongoDB**. It provides an API for managing products and shopping carts. Users can browse products, create carts, add items to carts, and administrators can manage the product catalog using CRUD operations.

---

# Project Goal

The goal of this project is to build a backend API that simulates the core functionality of an online store. The API allows users to browse available products, create shopping carts, and manage products through RESTful endpoints while storing all data in MongoDB.

---

# User Stories

- As a shopper, I can view products so I can choose what to buy.
- As a shopper, I can create a cart and add items to it.
- As an admin, I can add or edit products to keep the catalog updated.

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon
- Postman
- Git & GitHub

---

# Project Structure

```
ecommerce-backend/
│
├── controllers/
│   ├── productController.js
│   └── cartController.js
│
├── models/
│   ├── Product.js
│   └── Cart.js
│
├── routes/
│   ├── productRoutes.js
│   └── cartRoutes.js
│
├── services/
│   ├── productService.js
│   └── cartService.js
│
├── seedData/
│   └── products.js
│
├── server.js
├── db.js
├── seed.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd ecommerce-backend
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerceDB
```

---

# Running the Project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

# Seed the Database

Run:

```bash
node seed.js
```

This will:

- Connect to MongoDB
- Delete existing products
- Insert sample products

---

# API Endpoints

## Products

### Get all products

```
GET /products
```

### Get product by ID

```
GET /products/:id
```

### Create product

```
POST /products
```

### Update product

```
PUT /products/:id
```

### Delete product

```
DELETE /products/:id
```

---

## Carts

### Create cart

```
POST /carts
```

### Get cart

```
GET /carts/:id
```

### Add item to cart

```
POST /carts/:id/items
```

---

# Error Handling

The project uses a centralized error-handling middleware to return consistent JSON responses and appropriate HTTP status codes such as:

- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

---

# Sample Product

```json
{
  "name": "Laptop",
  "price": 1500,
  "description": "Gaming Laptop",
  "category": "Electronics",
  "image": "laptop.jpg"
}
```

---

# Features

- Product CRUD operations
- Shopping cart management
- MongoDB integration
- Mongoose models and validation
- RESTful API
- Seed script
- Environment variables
- Centralized error handling
- Layered architecture (Routes, Controllers, Services, Models)

---

# Testing

The API was tested using Postman.

The following endpoints were tested:

- GET /products
- POST /products
- PUT /products/:id
- DELETE /products/:id
- POST /carts
- GET /carts/:id
- POST /carts/:id/items

---

# Version

Current release:

```
v1.0.0
```

---

# Author

Malek