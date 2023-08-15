const router = require("express").Router();
const get_data = require("../utils/data");
const blogs = require("../data/all_data.json.json").articles;


router.get("/", async (req, res) => {

  const cart = req.session.cart;
  const data = await get_data();

  res.render("blog", { 
      pageName : "Blog",
      blogs : blogs,
      data : data,
      cart : cart
  });

});

router.get('/:slug', async (req, res) => {

  const blog = blogs.find(b => b.slug === req.params.slug);
  const cart = req.session.cart;
  const data = await get_data();

  if (blog == null) {

    res.redirect('/blog');

  } else {

    res.render("full-blog", { 
      pageName : blog.title,
      blog : blog,
      blogs : blogs,
      data : data,
      cart : cart
    });

  }
  
});
 

module.exports = router;