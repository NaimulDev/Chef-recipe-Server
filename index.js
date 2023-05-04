const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PERT || 5000;

// chef api data

const chef = require("./data/chef.json");
app.get("/", (req, res) => {
  res.send("chef recipes api is running");
});

// recipes Api Data
const recipes = require("./data/recipes.json");
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use(cors());

app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});
app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;

  const selectedRecipes = recipes.find((n) => n._id === id);
  res.send(selectedRecipes);
});
app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id === 0) {
    res.send(recipes);
  } else {
    const chefRecipes = recipes.filter((n) => parseInt(n.chef_id) === id);
    res.send(chefRecipes);
  }
});

app.listen(port, () => {
  console.log(`chef Api is running on port: ${port}`);
});
