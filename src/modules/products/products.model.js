const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["stock", "outOfStock"],
    required: true,
  },
});

const Products = model("Products", productsSchema);

module.exports = Products;
