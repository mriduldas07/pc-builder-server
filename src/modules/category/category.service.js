const Categories = require("./category.model");

const createCategory = async (payload) => {
  const result = (await Categories.create(payload)).populate("products");
  return result;
};

const getCategory = async () => {
  const result = await Categories.find().populate("products");
  return result;
};

const singleCategory = async (id) => {
  const result = await Categories.findById(id).populate("products");
  return result;
};

const categoryUpdate = async (id, payload) => {
  const result = await Categories.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

module.exports.CategoryServices = {
  createCategory,
  getCategory,
  singleCategory,
  categoryUpdate,
};
