const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PERT || 5000;

// chef api data

const chef = require("./data/chef.json");
app.get("/", (req, res) => {
  res.send("dragon is running");
});

// Products Api Data
const products = require("./data//products.json");
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use(cors());

app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const selectedproducts = products.find((n) => n._id === id);
  res.send(selectedproducts);
});
app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(products);
  } else {
    const productsChef = products.filter((n) => parseInt(n.category_id) === id);
    res.send(productsChef);
  }
});

// Listening

app.listen(port, () => {
  console.log(`chef Api is running on port: ${port}`);
});
