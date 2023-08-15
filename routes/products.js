const express = require("express");
const router = express.Router();
const products = require("../data/all_data.json.json").products;
const { getCart } = require("../utils/cart");
const get_data = require("../utils/data");


router.get("/", async (req, res) => {

  const cart = getCart(req);
  const data = await get_data();

  res.render("products", { 
    pageName : "Products",
    pageDescription : "Products",
    products : products,
    data : data,
    cart : cart
  });

});

router.get('/:slug', async (req, res) => {

  const cart = getCart(req);
  const product = products.find(p => p.slug === req.params.slug);
  const data = await get_data();

  if (product == null) {
    res.redirect('/');
  } else {
    res.render("product", { 
      pageName : `Product details - ${product.name}`,
      product : product,
      data : data,
      cart : cart
    });
  }

});


module.exports = router;