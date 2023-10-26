const { ProductServices } = require("./products.service");

const addProduct = async (req, res) => {
  const { ...productData } = req?.body;
  const result = await ProductServices.createProduct(productData);
  res.status(201).json({
    status: "success",
    data: result,
  });
};

const getAllProducts = async (req, res) => {
  const result = await ProductServices.getProducts();
  res.status(200).json({
    status: "success",
    data: result,
  });
};

const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  const result = await ProductServices.getSingleProducts(id);
  res.status(200).json({
    status: "success",
    data: result,
  });
};

module.exports.ProductController = {
  addProduct,
  getAllProducts,
  getSingleProduct,
};
