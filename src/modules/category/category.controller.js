const { CategoryServices } = require("./category.service");

const addCategory = async (req, res) => {
  const { ...categoryData } = req.body;
  const result = await CategoryServices.createCategory(categoryData);
  res.status(201).json({
    status: "success",
    data: result,
  });
};

const getAllCategories = async (req, res) => {
  const result = await CategoryServices.getCategory();
  res.status(200).json({
    status: "success",
    data: result,
  });
};

const getSingleCategory = async (req, res) => {
  const id = req.params.id;
  const result = await CategoryServices.singleCategory(id);
  res.status(200).json({
    status: "success",
    data: result,
  });
};

module.exports.CategoryController = {
  addCategory,
  getAllCategories,
  getSingleCategory,
};
