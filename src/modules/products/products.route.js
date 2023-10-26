const express = require("express");
const { ProductController } = require("./products.controller");

const router = express.Router();

router.get("/single-product/:id", ProductController.getSingleProduct);
router.post("/create-product", ProductController.addProduct);
router.get("/all-products", ProductController.getAllProducts);

module.exports = router;
