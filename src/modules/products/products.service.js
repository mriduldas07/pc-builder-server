const Products = require("./products.model");

const createProduct = async (payload) => {
  const result = (await Products.create(payload)).populate(
    "category",
    "-_id -products"
  );
  return result;
};

const getProducts = async () => {
  const result = await Products.find()
    .sort({ _id: -1 })
    .limit(6)
    .populate("category", "-_id -products");
  return result;
};

const getSingleProducts = async (id) => {
  const result = await Products.findById(id).populate(
    "category",
    "-_id -products"
  );
  return result;
};

module.exports.ProductServices = {
  createProduct,
  getProducts,
  getSingleProducts,
};
