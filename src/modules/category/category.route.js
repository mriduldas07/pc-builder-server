const express = require("express");
const { CategoryController } = require("./category.controller");
const router = express.Router();

router.get("/single-category/:id", CategoryController.getSingleCategory);
router.patch("/update-category/:id", CategoryController.updateCategory);
router.post("/create-category", CategoryController.addCategory);
router.get("/all-category", CategoryController.getAllCategories);

module.exports = router;
