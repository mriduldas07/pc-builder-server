const express = require("express");
const cors = require("cors");
const productRoutes = require("./modules/products/products.route");
const categoryRoutes = require("./modules/category/category.route");

const app = express();

app.use(cors());
// app.use(bodyParser.json());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routes
app.use("/api/v1", productRoutes);
app.use("/api/v1", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Hello Sir!!!");
});

module.exports = app;
