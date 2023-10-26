const { Schema, model, Types } = require("mongoose");

const categorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Categories = model("Category", categorySchema);

module.exports = Categories;
